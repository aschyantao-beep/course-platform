/**
 * Supabase 客户端配置
 * 用于连接 Supabase 数据库
 */

// Supabase 配置
const SUPABASE_URL = 'https://ebylczerbbhkccfoefgk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVieWxjemVyYmJoa2NjZm9lZmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTM2MjEsImV4cCI6MjA3OTI2OTYyMX0.q7_8UU29lyMPaY-1xRoT1UeLEJFcjepcogk8rfKt8lI';

// 初始化 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * 用户认证相关函数
 */
class SupabaseAuth {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        // 检查现有会话
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            this.currentUser = session.user;
            this.onUserLogin(session.user);
        }

        // 监听认证状态变化
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session) {
                this.currentUser = session.user;
                this.onUserLogin(session.user);
            } else if (event === 'SIGNED_OUT') {
                this.currentUser = null;
                this.onUserLogout();
            }
        });
    }

    // 用户注册
    async signUp(email, password, name = '') {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name
                    }
                }
            });

            if (error) throw error;

            // 创建用户资料记录
            if (data.user) {
                await this.createUserProfile(data.user);
            }

            return { success: true, data };
        } catch (error) {
            console.error('注册失败:', error);
            return { success: false, error: error.message };
        }
    }

    // 用户登录
    async signIn(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('登录失败:', error);
            return { success: false, error: error.message };
        }
    }

    // 用户登出
    async signOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('登出失败:', error);
            return { success: false, error: error.message };
        }
    }

    // 创建用户资料
    async createUserProfile(user) {
        try {
            const { error } = await supabase
                .from('users')
                .insert({
                    id: user.id,
                    email: user.email,
                    name: user.user_metadata?.name || user.email?.split('@')[0] || '用户',
                    created_at: new Date().toISOString(),
                    total_study_time: 0
                });

            if (error) throw error;
        } catch (error) {
            console.error('创建用户资料失败:', error);
        }
    }

    // 用户登录成功后的回调
    onUserLogin(user) {
        console.log('用户登录:', user);
        // 更新UI显示用户信息
        this.updateUserUI();
        // 同步本地数据到云端
        this.syncLocalData();
    }

    // 用户登出后的回调
    onUserLogout() {
        console.log('用户已登出');
        localStorage.removeItem('currentUserId');
        this.updateUserUI();
    }

    // 更新UI显示
    updateUserUI() {
        const userElements = document.querySelectorAll('.user-name, .user-email');
        userElements.forEach(el => {
            if (this.currentUser) {
                el.textContent = this.currentUser.user_metadata?.name || this.currentUser.email;
            } else {
                el.textContent = '游客';
            }
        });
    }

    // 同步本地数据到云端
    async syncLocalData() {
        if (!this.currentUser) return;

        try {
            // 获取本地学习数据
            const localData = JSON.parse(localStorage.getItem('learningData') || '{}');

            for (const [date, sessions] of Object.entries(localData)) {
                for (const session of sessions) {
                    await this.saveLearningSession(session);
                }
            }

            // 清空本地数据
            localStorage.removeItem('learningData');
            console.log('本地数据已同步到云端');
        } catch (error) {
            console.error('同步数据失败:', error);
        }
    }

    // 保存学习会话到云端
    async saveLearningSession(sessionData) {
        try {
            const { error } = await supabase
                .from('learning_sessions')
                .insert({
                    user_id: this.currentUser.id,
                    course_id: sessionData.courseId || 'unknown',
                    page_type: sessionData.pageInfo?.type || 'other',
                    start_time: new Date(sessionData.startTime).toISOString(),
                    end_time: new Date(sessionData.endTime).toISOString(),
                    duration: Math.round(sessionData.duration / 1000), // 转换为秒
                    is_completed: sessionData.isComplete,
                    created_at: new Date(sessionData.timestamp).toISOString()
                });

            if (error) throw error;
        } catch (error) {
            console.error('保存学习会话失败:', error);
        }
    }
}

/**
 * 数据管理类
 */
class DataManager {
    constructor() {
        this.supabase = window.supabase;
        this.auth = new SupabaseAuth();
    }

    // 获取用户学习统计
    async getUserStats(userId = null) {
        try {
            const currentUserId = userId || this.auth.currentUser?.id;
            if (!currentUserId) return null;

            // 获取学习会话统计
            const { data: sessions, error: sessionsError } = await this.supabase
                .from('learning_sessions')
                .select('*')
                .eq('user_id', currentUserId);

            if (sessionsError) throw sessionsError;

            // 获取测试成绩统计
            const { data: quizResults, error: quizError } = await this.supabase
                .from('quiz_results')
                .select('*')
                .eq('user_id', currentUserId);

            if (quizError) throw quizError;

            // 获取学习进度
            const { data: progress, error: progressError } = await this.supabase
                .from('user_progress')
                .select('*')
                .eq('user_id', currentUserId);

            if (progressError) throw progressError;

            // 计算统计数据
            const stats = this.calculateStats(sessions, quizResults, progress);
            return stats;
        } catch (error) {
            console.error('获取用户统计失败:', error);
            return null;
        }
    }

    // 计算统计数据
    calculateStats(sessions, quizResults, progress) {
        let totalTime = 0;
        let sessionCount = sessions?.length || 0;
        let courseStats = {};
        let averageScore = 0;

        // 计算学习时长
        sessions?.forEach(session => {
            totalTime += session.duration || 0;

            if (session.course_id && session.course_id !== 'unknown') {
                if (!courseStats[session.course_id]) {
                    courseStats[session.course_id] = {
                        totalTime: 0,
                        sessionCount: 0
                    };
                }
                courseStats[session.course_id].totalTime += session.duration;
                courseStats[session.course_id].sessionCount++;
            }
        });

        // 计算平均测试分数
        if (quizResults && quizResults.length > 0) {
            const totalScore = quizResults.reduce((sum, result) => sum + (result.score || 0), 0);
            averageScore = totalScore / quizResults.length;
        }

        return {
            totalTime: totalTime,
            sessionCount: sessionCount,
            averageSessionTime: sessionCount > 0 ? Math.round(totalTime / sessionCount) : 0,
            courseStats: courseStats,
            averageScore: Math.round(averageScore * 100) / 100,
            quizCount: quizResults?.length || 0,
            progressCount: progress?.length || 0
        };
    }

    // 保存测试成绩
    async saveQuizResult(quizData) {
        try {
            if (!this.auth.currentUser) return { success: false, error: '用户未登录' };

            const { data, error } = await this.supabase
                .from('quiz_results')
                .insert({
                    user_id: this.auth.currentUser.id,
                    course_id: quizData.courseId,
                    total_questions: quizData.totalQuestions,
                    correct_answers: quizData.correctAnswers,
                    score: quizData.score,
                    time_spent: quizData.timeSpent,
                    created_at: new Date().toISOString()
                });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('保存测试成绩失败:', error);
            return { success: false, error: error.message };
        }
    }

    // 更新学习进度
    async updateProgress(courseId, lessonsCompleted, totalLessons) {
        try {
            if (!this.auth.currentUser) return { success: false, error: '用户未登录' };

            const progressPercentage = Math.round((lessonsCompleted / totalLessons) * 100);

            const { data, error } = await this.supabase
                .from('user_progress')
                .upsert({
                    user_id: this.auth.currentUser.id,
                    course_id: courseId,
                    lessons_completed: lessonsCompleted,
                    total_lessons: totalLessons,
                    progress_percentage: progressPercentage,
                    last_accessed: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('更新学习进度失败:', error);
            return { success: false, error: error.message };
        }
    }
}

// 全局实例
window.dataManager = new DataManager();

// 兼容旧代码：保持原有的 LearningTracker 类可用
class LearningTrackerWithSupabase {
    constructor() {
        this.dataManager = window.dataManager;
        this.startTime = null;
        this.currentPage = null;
        this.currentCourseId = null;
        this.userId = null;
        this.isActive = true;
        this.lastActivityTime = Date.now();

        this.init();
    }

    async init() {
        // 等待用户认证状态加载
        setTimeout(() => {
            this.startTracking();
            this.setupActivityListeners();
        }, 500);

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

        // 定期检查用户是否活跃
        setInterval(() => {
            this.checkActivity();
        }, 30000);
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

    async startTracking() {
        this.startTime = Date.now();
        this.currentPage = this.getCurrentPageInfo();
        this.userId = this.dataManager.auth.currentUser?.id;
        this.isActive = true;

        console.log('开始记录学习时长:', this.currentPage);
    }

    async pauseTracking() {
        if (this.startTime && this.isActive && this.userId) {
            const duration = Date.now() - this.startTime;
            await this.saveLearningSession(duration, false);
            console.log('暂停记录学习时长，当前时长:', Math.round(duration / 1000), '秒');
        }
    }

    async resumeTracking() {
        if (!this.isActive) {
            this.startTime = Date.now();
            this.isActive = true;
            console.log('恢复记录学习时长');
        }
    }

    async stopTracking() {
        if (this.startTime && this.isActive && this.userId) {
            const duration = Date.now() - this.startTime;
            await this.saveLearningSession(duration, true);
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
        } else {
            pageInfo.type = 'other';
        }

        this.currentCourseId = pageInfo.courseId;
        return pageInfo;
    }

    async saveLearningSession(duration, isComplete) {
        try {
            // 只记录超过10秒的学习时长
            if (duration < 10000) return;

            if (this.userId) {
                // 用户已登录，直接保存到云端
                await this.dataManager.auth.saveLearningSession({
                    courseId: this.currentCourseId,
                    pageInfo: this.currentPage,
                    startTime: this.startTime,
                    endTime: Date.now(),
                    duration: duration,
                    isComplete: isComplete,
                    timestamp: Date.now()
                });
            } else {
                // 用户未登录，保存到本地
                this.saveToLocalStorage(duration, isComplete);
            }
        } catch (error) {
            console.error('保存学习时长失败:', error);
            // 降级到本地存储
            this.saveToLocalStorage(duration, isComplete);
        }
    }

    saveToLocalStorage(duration, isComplete) {
        try {
            const sessionData = {
                userId: localStorage.getItem('currentUserId') || 'guest',
                pageInfo: this.currentPage,
                courseId: this.currentCourseId,
                duration: duration,
                startTime: this.startTime,
                endTime: Date.now(),
                isComplete: isComplete,
                timestamp: Date.now()
            };

            let learningData = JSON.parse(localStorage.getItem('learningData') || '{}');
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

            localStorage.setItem('learningData', JSON.stringify(learningData));
            console.log('学习时长已保存到本地:', sessionData);
        } catch (error) {
            console.error('保存到本地失败:', error);
        }
    }

    // 获取用户的学习统计数据
    static async getLearningStats(userId = null) {
        try {
            const dataManager = window.dataManager;
            if (dataManager && dataManager.auth.currentUser) {
                // 用户已登录，从云端获取数据
                const stats = await dataManager.getUserStats();
                return stats || {
                    totalTime: 0,
                    sessionCount: 0,
                    averageSessionTime: 0,
                    courseStats: {},
                    dailyStats: {}
                };
            } else {
                // 用户未登录，从本地获取数据
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
            }
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

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 替换原有的 LearningTracker
    if (typeof window.LearningTracker !== 'undefined') {
        window.LearningTracker = LearningTrackerWithSupabase;
    }

    // 初始化新的学习追踪器
    if (typeof window.learningTracker === 'undefined') {
        window.learningTracker = new LearningTrackerWithSupabase();
    }
});

// 导出到全局
window.SupabaseAuth = SupabaseAuth;
window.LearningTrackerWithSupabase = LearningTrackerWithSupabase;