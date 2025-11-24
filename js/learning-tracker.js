/**
 * 学习时长记录系统
 * 用于记录用户在各个页面的学习时长
 */
class LearningTracker {
    constructor() {
        this.startTime = null;
        this.currentPage = null;
        this.currentCourseId = null;
        this.userId = this.getCurrentUserId();
        this.isActive = true;
        this.lastActivityTime = Date.now();
        
        this.init();
    }
    
    init() {
        // 页面加载时开始记录
        this.startTracking();
        
        // 监听页面可见性变化
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseTracking();
            } else {
                this.resumeTracking();
            }
        });
        
        // 监听页面卸载
        window.addEventListener('beforeunload', () => {
            this.stopTracking();
        });
        
        // 监听用户活动（鼠标移动、键盘输入等）
        this.setupActivityListeners();
        
        // 定期检查用户是否活跃
        setInterval(() => {
            this.checkActivity();
        }, 30000); // 每30秒检查一次
    }
    
    setupActivityListeners() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        
        events.forEach(event => {
            document.addEventListener(event, () => {
                this.lastActivityTime = Date.now();
                if (!this.isActive) {
                    this.isActive = true;
                    this.resumeTracking();
                }
            }, true);
        });
    }
    
    checkActivity() {
        const now = Date.now();
        const inactiveTime = now - this.lastActivityTime;
        
        // 如果超过5分钟没有活动，认为用户不活跃
        if (inactiveTime > 5 * 60 * 1000 && this.isActive) {
            this.isActive = false;
            this.pauseTracking();
        }
    }
    
    startTracking() {
        this.startTime = Date.now();
        this.currentPage = this.getCurrentPageInfo();
        this.isActive = true;
        
        console.log('开始记录学习时长:', this.currentPage);
    }
    
    pauseTracking() {
        if (this.startTime && this.isActive) {
            const duration = Date.now() - this.startTime;
            this.saveLearningSession(duration, false); // false表示暂停，不是结束
            console.log('暂停记录学习时长，当前时长:', Math.round(duration / 1000), '秒');
        }
    }
    
    resumeTracking() {
        if (!this.isActive) {
            this.startTime = Date.now();
            this.isActive = true;
            console.log('恢复记录学习时长');
        }
    }
    
    stopTracking() {
        if (this.startTime && this.isActive) {
            const duration = Date.now() - this.startTime;
            this.saveLearningSession(duration, true); // true表示结束
            console.log('结束记录学习时长，总时长:', Math.round(duration / 1000), '秒');
        }
    }
    
    getCurrentPageInfo() {
        const path = window.location.pathname;
        const params = new URLSearchParams(window.location.search);

        let pageInfo = {
            path: path,
            title: document.title,
            url: window.location.href
        };

        // 根据页面路径确定页面类型和课程ID
        if (path.includes('course-detail.html')) {
            pageInfo.type = 'course-detail';
            pageInfo.courseId = params.get('id') || 'unknown';
        } else if (path.includes('quiz.html')) {
            pageInfo.type = 'quiz';
            pageInfo.courseId = params.get('courseId') || 'unknown';
        } else if (path.includes('courses/')) {
            pageInfo.type = 'course-page';
            const courseMatch = path.match(/course(\d+)\.html/);
            pageInfo.courseId = courseMatch ? `course${courseMatch[1]}` : 'unknown';
        } else if (path.includes('index.html') || path === '/') {
            pageInfo.type = 'home';
            // 从DOM元素获取当前点击的课程ID
            pageInfo.courseId = this.getCurrentCourseIdFromDOM() || 'home';
        } else {
            pageInfo.type = 'other';
        }

        this.currentCourseId = pageInfo.courseId;
        return pageInfo;
    }

    // 新增：从DOM获取当前课程ID
    getCurrentCourseIdFromDOM() {
        // 1. 检查localStorage中保存的当前课程
        const currentCourse = localStorage.getItem('currentLearningCourse');
        if (currentCourse && currentCourse !== 'null') {
            return currentCourse;
        }

        // 2. 从最近的课程卡片获取
        const courseCards = document.querySelectorAll('.course-card');
        if (courseCards.length > 0) {
            // 假设用户最可能学习第一个课程
            const firstCourse = courseCards[0].getAttribute('data-course');
            if (firstCourse) {
                return `course${firstCourse}`;
            }
        }

        return null;
    }
    
    saveLearningSession(duration, isComplete) {
        try {
            // 只记录超过10秒的学习时长
            if (duration < 10000) return;

            const sessionData = {
                userId: this.userId,
                pageInfo: this.currentPage,
                courseId: this.currentCourseId,
                duration: duration, // 毫秒
                startTime: this.startTime,
                endTime: Date.now(),
                isComplete: isComplete,
                timestamp: Date.now()
            };

            // 获取现有的学习记录
            let learningData = JSON.parse(localStorage.getItem('learningData') || '{}');

            // 按日期组织数据
            const today = new Date().toISOString().split('T')[0];
            if (!learningData[today]) {
                learningData[today] = [];
            }

            learningData[today].push(sessionData);

            // 只保留最近30天的数据
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            const cutoffDate = thirtyDaysAgo.toISOString().split('T')[0];

            Object.keys(learningData).forEach(date => {
                if (date < cutoffDate) {
                    delete learningData[date];
                }
            });

            // 保存到localStorage
            localStorage.setItem('learningData', JSON.stringify(learningData));

            // 更新学习进度
            this.updateLearningProgress(sessionData);

            // 同步到云端
            this.syncSessionToCloud(sessionData);

            console.log('学习时长已保存:', sessionData);
        } catch (error) {
            console.error('保存学习时长失败:', error);
        }
    }

    // 更新学习进度
    updateLearningProgress(sessionData) {
        try {
            // 只为具体课程更新进度
            if (!sessionData.courseId || sessionData.courseId === 'unknown' || sessionData.courseId === 'home') {
                return;
            }

            // 获取现有的进度数据
            let progressData = JSON.parse(localStorage.getItem('courseProgress') || '{}');

            // 如果该课程还没有进度数据，创建初始数据
            if (!progressData[sessionData.courseId]) {
                progressData[sessionData.courseId] = {
                    courseId: sessionData.courseId,
                    totalStudyTime: 0,
                    sessionCount: 0,
                    lastAccessTime: 0,
                    lessonsCompleted: 0,
                    totalLessons: 10, // 假设每个课程有10个课时
                    progressPercentage: 0
                };
            }

            // 更新进度数据
            const progress = progressData[sessionData.courseId];
            progress.totalStudyTime += sessionData.duration;
            progress.sessionCount += 1;
            progress.lastAccessTime = sessionData.timestamp;

            // 根据学习时长计算完成课时数（假设每课时30分钟）
            const studyTimeMinutes = progress.totalStudyTime / (1000 * 60);
            progress.lessonsCompleted = Math.min(Math.floor(studyTimeMinutes / 30), progress.totalLessons);
            progress.progressPercentage = Math.round((progress.lessonsCompleted / progress.totalLessons) * 100);

            // 保存进度数据
            localStorage.setItem('courseProgress', JSON.stringify(progressData));

            // 同步到云端
            this.syncProgressToCloud(sessionData.courseId, progress);

            // 更新页面上的进度条
            this.updateProgressBar(sessionData.courseId, progress);

            console.log('学习进度已更新:', progress);
        } catch (error) {
            console.error('更新学习进度失败:', error);
        }
    }

    // 同步进度到云端
    async syncProgressToCloud(courseId, progress) {
        try {
            // 确保courseId有效
            if (!courseId || courseId === 'undefined' || courseId === 'null' || courseId === 'unknown') {
                console.warn('无效的courseId，跳过同步:', courseId);
                return;
            }

            // 检查用户是否已登录
            let currentUser = null;

            // 检查多种可能的用户管理器路径
            if (window.userManager && window.userManager.currentUser) {
                currentUser = window.userManager.currentUser;
            } else if (window.supabaseAuth && window.supabaseAuth.currentUser) {
                currentUser = window.supabaseAuth.currentUser;
            } else {
                // 直接从Supabase获取当前用户
                const { data: { session } } = await window.supabase.auth.getSession();
                currentUser = session?.user;
            }

            if (currentUser && window.supabase) {
                console.log('开始同步学习进度到云端:', { courseId, progress, userId: currentUser.id });

                // 确保进度数据完整性
                const progressPercentage = Math.round((progress.lessonsCompleted / progress.totalLessons) * 100);
                const totalStudyTimeSeconds = Math.round(progress.totalStudyTime / 1000);

                // 准备完整的学习进度数据
                const progressData = {
                    user_id: currentUser.id,
                    course_id: courseId,
                    lessons_completed: progress.lessonsCompleted || 0,
                    total_lessons: progress.totalLessons || 10,
                    progress_percentage: progressPercentage,
                    total_study_time: totalStudyTimeSeconds,
                    session_count: progress.sessionCount || 1,
                    last_access_time: new Date(progress.lastAccessTime || Date.now()).toISOString(),
                    updated_at: new Date().toISOString()
                };

                console.log('准备同步的进度数据:', progressData);

                // 使用 upsert 操作同步到 Supabase
                const { data, error } = await window.supabase
                    .from('user_progress')
                    .upsert(progressData, {
                        onConflict: 'user_id,course_id'
                    })
                    .select(); // 添加 .select() 来返回插入的数据

                if (error) {
                    console.error('进度云端同步失败:', error);
                    console.error('错误详情:', error.details, error.hint, error.message);
                } else {
                    console.log('学习进度已同步到云端:', data);

                    // 触发进度更新事件
                    if (window.dispatchEvent) {
                        window.dispatchEvent(new CustomEvent('progressUpdated', {
                            detail: { courseId, progress: progressData }
                        }));
                    }
                }
            } else {
                console.log('用户未登录或Supabase未初始化，跳过云端同步');
                console.log('currentUser:', currentUser ? '已登录' : '未登录');
                console.log('supabase:', window.supabase ? '已初始化' : '未初始化');
            }
        } catch (error) {
            console.error('同步进度到云端失败:', error);
            console.error('错误堆栈:', error.stack);
        }
    }

    // 同步学习会话到云端
    async syncSessionToCloud(sessionData) {
        try {
            // 检查用户是否已登录
            let currentUser = null;

            // 检查多种可能的用户管理器路径
            if (window.userManager && window.userManager.currentUser) {
                currentUser = window.userManager.currentUser;
            } else if (window.supabaseAuth && window.supabaseAuth.currentUser) {
                currentUser = window.supabaseAuth.currentUser;
            } else {
                // 直接从Supabase获取当前用户
                const { data: { session } } = await window.supabase.auth.getSession();
                currentUser = session?.user;
            }

            if (currentUser && window.supabase) {
                console.log('开始同步学习会话到云端:', { courseId: sessionData.courseId, userId: currentUser.id });

                // 直接插入学习会话到Supabase
                const { data, error } = await window.supabase
                    .from('learning_sessions')
                    .insert({
                        user_id: currentUser.id,
                        course_id: sessionData.courseId || 'unknown',
                        page_type: sessionData.pageInfo?.type || 'other',
                        start_time: new Date(sessionData.startTime).toISOString(),
                        end_time: new Date(sessionData.endTime).toISOString(),
                        duration: Math.round(sessionData.duration / 1000), // 转换为秒
                        is_completed: sessionData.isComplete,
                        created_at: new Date(sessionData.timestamp).toISOString()
                    });

                if (error) {
                    console.error('学习会话云端同步失败:', error);
                } else {
                    console.log('学习会话已同步到云端:', data);
                }
            } else {
                console.log('用户未登录，跳过学习会话云端同步');
            }
        } catch (error) {
            console.error('同步学习会话到云端失败:', error);
        }
    }

    // 更新页面上的进度条
    updateProgressBar(courseId, progress) {
        try {
            // 移除course前缀，获取纯数字ID
            const numericId = courseId.replace('course', '');

            // 更新进度条
            const progressBar = document.getElementById(`progress-course-${numericId}`);
            const progressText = document.getElementById(`progress-text-${numericId}`);

            if (progressBar && progressText) {
                progressBar.style.width = `${progress.progressPercentage}%`;
                progressText.textContent = `${progress.progressPercentage}%`;
            }

            // 更新学习时长显示
            const timeDisplay = document.querySelector(`[data-course="${numericId}"] .learning-time`);
            if (timeDisplay) {
                const totalMinutes = Math.round(progress.totalStudyTime / (1000 * 60));
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;

                if (hours > 0) {
                    timeDisplay.textContent = `${hours}小时${minutes}分钟`;
                } else {
                    timeDisplay.textContent = `${minutes}分钟`;
                }
            }
        } catch (error) {
            console.error('更新进度条失败:', error);
        }
    }
    
    getCurrentUserId() {
        let userId = localStorage.getItem('currentUserId');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('currentUserId', userId);
        }
        return userId;
    }
    
    // 获取用户的学习统计数据
    static getLearningStats(userId = null) {
        try {
            const learningData = JSON.parse(localStorage.getItem('learningData') || '{}');
            const currentUserId = userId || localStorage.getItem('currentUserId');
            
            let totalTime = 0;
            let sessionCount = 0;
            let courseStats = {};
            let dailyStats = {};
            
            Object.keys(learningData).forEach(date => {
                dailyStats[date] = 0;
                
                learningData[date].forEach(session => {
                    if (!userId || session.userId === currentUserId) {
                        totalTime += session.duration;
                        sessionCount++;
                        dailyStats[date] += session.duration;
                        
                        if (session.courseId && session.courseId !== 'unknown') {
                            if (!courseStats[session.courseId]) {
                                courseStats[session.courseId] = {
                                    totalTime: 0,
                                    sessionCount: 0,
                                    lastAccess: 0
                                };
                            }
                            courseStats[session.courseId].totalTime += session.duration;
                            courseStats[session.courseId].sessionCount++;
                            courseStats[session.courseId].lastAccess = Math.max(
                                courseStats[session.courseId].lastAccess,
                                session.timestamp
                            );
                        }
                    }
                });
            });
            
            return {
                totalTime: totalTime,
                sessionCount: sessionCount,
                averageSessionTime: sessionCount > 0 ? totalTime / sessionCount : 0,
                courseStats: courseStats,
                dailyStats: dailyStats
            };
        } catch (error) {
            console.error('获取学习统计失败:', error);
            return {
                totalTime: 0,
                sessionCount: 0,
                averageSessionTime: 0,
                courseStats: {},
                dailyStats: {}
            };
        }
    }
}

// 自动初始化学习时长记录
let learningTracker;
document.addEventListener('DOMContentLoaded', () => {
    learningTracker = new LearningTracker();

    // 设置课程链接点击追踪
    setupCourseLinkTracking();

    // 恢复现有的学习进度
    restoreLearningProgress();
});

// 恢复现有的学习进度
function restoreLearningProgress() {
    try {
        const progressData = JSON.parse(localStorage.getItem('courseProgress') || '{}');

        Object.keys(progressData).forEach(courseId => {
            const progress = progressData[courseId];
            if (learningTracker) {
                learningTracker.updateProgressBar(courseId, progress);
            }
        });

        console.log('学习进度已恢复:', progressData);
    } catch (error) {
        console.error('恢复学习进度失败:', error);
    }
}

// 设置课程链接点击追踪
function setupCourseLinkTracking() {
    // 为所有课程链接添加点击事件
    const courseLinks = document.querySelectorAll('.course-link');

    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 获取课程ID - 多种方式尝试
            let courseId = this.getAttribute('data-course-id');
            const courseCard = this.closest('.course-card');
            const courseName = courseCard.querySelector('h3').textContent;

            // 如果没有data-course-id，从course-card的data-course获取
            if (!courseId) {
                const cardCourseId = courseCard.getAttribute('data-course');
                if (cardCourseId) {
                    courseId = cardCourseId;
                }
            }

            // 确保courseId有效
            if (courseId) {
                const fullCourseId = courseId.startsWith('course') ? courseId : `course${courseId}`;

                // 保存当前学习的课程到多个地方确保可靠性
                localStorage.setItem('currentLearningCourse', fullCourseId);
                localStorage.setItem('currentCourseId', courseId); // 数字ID
                localStorage.setItem('currentLearningCourseName', courseName);

                console.log('开始学习课程:', courseName, 'ID:', courseId, '完整ID:', fullCourseId);

                // 记录学习开始
                if (learningTracker) {
                    learningTracker.currentCourseId = fullCourseId;
                    learningTracker.currentPage.title = courseName;
                    learningTracker.startTime = Date.now();
                }
            } else {
                console.warn('无法获取课程ID:', courseCard);
            }
        });
    });

    // 页面加载时也尝试设置当前课程
    setTimeout(() => {
        const firstCourse = document.querySelector('.course-card[data-course]');
        if (firstCourse) {
            const courseId = firstCourse.getAttribute('data-course');
            const courseName = firstCourse.querySelector('h3').textContent;

            // 设置默认当前课程
            localStorage.setItem('currentCourseId', courseId);
            console.log('设置默认当前课程:', courseName, 'ID:', courseId);
        }
    }, 1000);
}

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LearningTracker;
}