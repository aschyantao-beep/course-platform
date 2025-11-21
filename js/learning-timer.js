class LearningTimer {
    constructor() {
        this.timers = new Map(); // 存储每个课程的计时器
        this.studyData = this.loadStudyData();
        this.init();
    }

    init() {
        // 绑定所有开始学习按钮的点击事件
        document.querySelectorAll('.course-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const courseId = link.getAttribute('data-course-id');
                this.startLearning(courseId);
            });
        });

        // 监听页面可见性变化（用户返回时暂停计时）
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.handlePageReturn();
            }
        });

        // 监听窗口焦点变化
        window.addEventListener('focus', () => {
            this.handlePageReturn();
        });

        // 初始化显示学习时长
        this.updateAllDisplays();
    }

    startLearning(courseId) {
        // 显示学习开始提示
        this.showNotification('学习时长已开始记录');
        
        // 记录开始时间
        const startTime = Date.now();
        this.timers.set(courseId, {
            startTime: startTime,
            isActive: true
        });

        // 保存到本地存储
        localStorage.setItem(`learning_start_${courseId}`, startTime.toString());
    }

    handlePageReturn() {
        // 检查是否有活跃的学习计时器
        this.timers.forEach((timer, courseId) => {
            if (timer.isActive) {
                this.stopLearning(courseId);
            }
        });

        // 检查本地存储中的计时器
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('learning_start_')) {
                const courseId = key.replace('learning_start_', '');
                const startTime = parseInt(localStorage.getItem(key));
                if (startTime) {
                    this.stopLearning(courseId, startTime);
                    localStorage.removeItem(key);
                }
            }
        }
    }

    stopLearning(courseId, customStartTime = null) {
        const timer = this.timers.get(courseId);
        const startTime = customStartTime || (timer ? timer.startTime : null);
        
        if (!startTime) return;

        const endTime = Date.now();
        const sessionDuration = Math.floor((endTime - startTime) / 1000 / 60); // 转换为分钟

        if (sessionDuration > 0) {
            // 更新总学习时长
            if (!this.studyData[courseId]) {
                this.studyData[courseId] = { totalMinutes: 0, sessions: [] };
            }
            
            this.studyData[courseId].totalMinutes += sessionDuration;
            this.studyData[courseId].sessions.push({
                startTime: startTime,
                endTime: endTime,
                duration: sessionDuration
            });

            // 保存数据
            this.saveStudyData();

            // 显示本次学习时长
            this.showNotification(`本次学习时长: ${sessionDuration}分钟`);

            // 更新显示
            this.updateDisplay(courseId);
        }

        // 清除计时器
        if (this.timers.has(courseId)) {
            this.timers.get(courseId).isActive = false;
        }
    }

    updateDisplay(courseId) {
        const data = this.studyData[courseId];
        const totalMinutes = data ? data.totalMinutes : 0;

        const timeElement = document.getElementById(`time-course-${courseId}`);
        const progressElement = document.getElementById(`progress-course-${courseId}`);
        const progressTextElement = document.getElementById(`progress-text-${courseId}`);

        if (timeElement) {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            const timeText = hours > 0 ? `${hours}小时${minutes}分钟` : `${minutes}分钟`;
            timeElement.textContent = timeText;
        }

        if (progressElement && progressTextElement) {
            // 假设每门课程的目标学习时长为120分钟（2小时）
            const targetMinutes = 120;
            const progress = Math.min((totalMinutes / targetMinutes) * 100, 100);
            
            progressElement.style.width = `${progress}%`;
            progressTextElement.textContent = `${Math.round(progress)}%`;
        }
    }

    updateAllDisplays() {
        // 更新所有课程的显示，包括没有学习数据的课程
        for (let i = 1; i <= 10; i++) {
            this.updateDisplay(i.toString());
        }
    }

    showNotification(message) {
        // 移除现有通知
        const existingNotification = document.querySelector('.learning-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 创建新通知
        const notification = document.createElement('div');
        notification.className = 'learning-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // 显示动画
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // 3秒后隐藏
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    loadStudyData() {
        try {
            const data = localStorage.getItem('courseStudyData');
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('加载学习数据失败:', error);
            return {};
        }
    }

    saveStudyData() {
        try {
            localStorage.setItem('courseStudyData', JSON.stringify(this.studyData));
        } catch (error) {
            console.error('保存学习数据失败:', error);
        }
    }

    // 获取课程学习统计
    getCourseStats(courseId) {
        const data = this.studyData[courseId];
        if (!data) return null;

        return {
            totalMinutes: data.totalMinutes,
            totalSessions: data.sessions.length,
            averageSessionLength: data.sessions.length > 0 
                ? Math.round(data.totalMinutes / data.sessions.length) 
                : 0,
            lastStudyDate: data.sessions.length > 0 
                ? new Date(data.sessions[data.sessions.length - 1].endTime).toLocaleDateString()
                : null
        };
    }

    // 获取总体学习统计
    getTotalStats() {
        let totalMinutes = 0;
        let totalSessions = 0;
        let coursesStudied = 0;

        Object.values(this.studyData).forEach(courseData => {
            totalMinutes += courseData.totalMinutes;
            totalSessions += courseData.sessions.length;
            if (courseData.totalMinutes > 0) coursesStudied++;
        });

        return {
            totalMinutes,
            totalSessions,
            coursesStudied,
            averageSessionLength: totalSessions > 0 
                ? Math.round(totalMinutes / totalSessions) 
                : 0
        };
    }

    // 重置课程学习数据
    resetCourseData(courseId) {
        if (this.studyData[courseId]) {
            delete this.studyData[courseId];
            this.saveStudyData();
            this.updateDisplay(courseId);
        }
    }

    // 重置所有学习数据
    resetAllData() {
        this.studyData = {};
        this.saveStudyData();
        this.updateAllDisplays();
    }
}

// 页面加载完成后初始化学习计时器
document.addEventListener('DOMContentLoaded', () => {
    window.learningTimer = new LearningTimer();
});