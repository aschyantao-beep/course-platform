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
        } else if (path.includes('courses.html')) {
            pageInfo.type = 'course-list';
        } else if (path.includes('index.html') || path === '/') {
            pageInfo.type = 'home';
        } else {
            pageInfo.type = 'other';
        }
        
        this.currentCourseId = pageInfo.courseId;
        return pageInfo;
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
            
            console.log('学习时长已保存:', sessionData);
        } catch (error) {
            console.error('保存学习时长失败:', error);
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
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LearningTracker;
}