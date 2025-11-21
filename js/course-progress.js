/**
 * 课程学习进度管理系统
 * 用于跟踪和管理用户在各个课程中的学习进度
 */

class CourseProgressManager {
    constructor() {
        this.storageKey = 'course_progress';
        this.initializeProgress();
    }

    /**
     * 初始化进度数据
     */
    initializeProgress() {
        if (!localStorage.getItem(this.storageKey)) {
            const initialProgress = {
                courses: {
                    'course1': { progress: 0, completed: false, lastAccess: null },
                    'course2': { progress: 0, completed: false, lastAccess: null },
                    'course3': { progress: 0, completed: false, lastAccess: null },
                    'course4': { progress: 0, completed: false, lastAccess: null },
                    'course5': { progress: 0, completed: false, lastAccess: null },
                    'course6': { progress: 0, completed: false, lastAccess: null },
                    'course7': { progress: 0, completed: false, lastAccess: null },
                    'course8': { progress: 0, completed: false, lastAccess: null },
                    'course9': { progress: 0, completed: false, lastAccess: null },
                    'course10': { progress: 0, completed: false, lastAccess: null }
                },
                totalProgress: 0
            };
            localStorage.setItem(this.storageKey, JSON.stringify(initialProgress));
        }
    }

    /**
     * 获取课程进度
     * @param {string} courseId - 课程ID
     * @returns {object} 课程进度对象
     */
    getCourseProgress(courseId) {
        const progress = JSON.parse(localStorage.getItem(this.storageKey));
        return progress.courses[courseId] || { progress: 0, completed: false, lastAccess: null };
    }

    /**
     * 更新课程进度
     * @param {string} courseId - 课程ID
     * @param {number} progress - 进度百分比 (0-100)
     */
    updateCourseProgress(courseId, progress) {
        const data = JSON.parse(localStorage.getItem(this.storageKey));
        
        if (data.courses[courseId]) {
            data.courses[courseId].progress = Math.min(100, Math.max(0, progress));
            data.courses[courseId].lastAccess = new Date().toISOString();
            
            if (progress >= 100) {
                data.courses[courseId].completed = true;
            }
            
            // 更新总进度
            const totalCourses = Object.keys(data.courses).length;
            const totalProgress = Object.values(data.courses).reduce((sum, course) => sum + course.progress, 0);
            data.totalProgress = Math.round(totalProgress / totalCourses);
            
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            this.renderProgress(courseId);
        }
    }

    /**
     * 标记课程为已完成
     * @param {string} courseId - 课程ID
     */
    completeCourse(courseId) {
        this.updateCourseProgress(courseId, 100);
    }

    /**
     * 获取总学习进度
     * @returns {number} 总进度百分比
     */
    getTotalProgress() {
        const progress = JSON.parse(localStorage.getItem(this.storageKey));
        return progress.totalProgress || 0;
    }

    /**
     * 获取所有课程的进度
     * @returns {object} 所有课程进度
     */
    getAllProgress() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    /**
     * 重置课程进度
     * @param {string} courseId - 课程ID
     */
    resetCourseProgress(courseId) {
        this.updateCourseProgress(courseId, 0);
    }

    /**
     * 渲染进度条和相关信息
     * @param {string} courseId - 课程ID
     */
    renderProgress(courseId) {
        const progressData = this.getCourseProgress(courseId);
        const progressContainer = document.getElementById('progress-container');
        
        if (!progressContainer) return;

        const progressBar = document.querySelector('.progress-bar');
        const progressPercentage = document.querySelector('.progress-percentage');
        const progressText = document.querySelector('.progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${progressData.progress}%`;
        }
        
        if (progressPercentage) {
            progressPercentage.textContent = `${progressData.progress}%`;
        }
        
        if (progressText) {
            if (progressData.completed) {
                progressText.textContent = '已完成课程！';
            } else if (progressData.progress > 0) {
                progressText.textContent = `正在学习中...`;
            } else {
                progressText.textContent = '尚未开始学习';
            }
        }

        this.updateMilestones(progressData.progress);
        this.updateProgressButtons(progressData.progress);
    }

    /**
     * 更新里程碑状态
     * @param {number} progress - 当前进度
     */
    updateMilestones(progress) {
        const milestones = document.querySelectorAll('.milestone');
        milestones.forEach((milestone, index) => {
            const milestoneProgress = (index + 1) * 25;
            
            milestone.classList.remove('completed', 'active');
            
            if (progress >= milestoneProgress) {
                milestone.classList.add('completed');
            } else if (progress >= milestoneProgress - 12.5) {
                milestone.classList.add('active');
            }
        });
    }

    /**
     * 更新进度按钮状态
     * @param {number} currentProgress - 当前进度
     */
    updateProgressButtons(currentProgress) {
        const increaseBtn = document.getElementById('increase-progress');
        const decreaseBtn = document.getElementById('decrease-progress');
        const completeBtn = document.getElementById('complete-course');
        
        if (increaseBtn) {
            increaseBtn.disabled = currentProgress >= 100;
        }
        
        if (decreaseBtn) {
            decreaseBtn.disabled = currentProgress <= 0;
        }
        
        if (completeBtn) {
            completeBtn.style.display = currentProgress >= 100 ? 'none' : 'inline-block';
        }
    }

    /**
     * 增加进度
     * @param {string} courseId - 课程ID
     * @param {number} increment - 增加的进度值
     */
    increaseProgress(courseId, increment = 10) {
        const currentProgress = this.getCourseProgress(courseId).progress;
        this.updateCourseProgress(courseId, currentProgress + increment);
    }

    /**
     * 减少进度
     * @param {string} courseId - 课程ID
     * @param {number} decrement - 减少的进度值
     */
    decreaseProgress(courseId, decrement = 10) {
        const currentProgress = this.getCourseProgress(courseId).progress;
        this.updateCourseProgress(courseId, currentProgress - decrement);
    }

    /**
     * 获取学习统计信息
     * @returns {object} 学习统计
     */
    getLearningStats() {
        const progress = this.getAllProgress();
        const courses = Object.values(progress.courses);
        
        return {
            totalCourses: courses.length,
            completedCourses: courses.filter(c => c.completed).length,
            averageProgress: Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length),
            learningStreak: this.calculateLearningStreak()
        };
    }

    /**
     * 计算连续学习天数
     * @returns {number} 连续学习天数
     */
    calculateLearningStreak() {
        const progress = this.getAllProgress();
        const today = new Date().toDateString();
        let streak = 0;
        
        // 简化的连续学习计算
        const hasRecentActivity = Object.values(progress.courses).some(course => 
            course.lastAccess && 
            new Date(course.lastAccess).toDateString() === today
        );
        
        return hasRecentActivity ? 1 : 0;
    }
}

/**
 * 初始化课程进度系统
 */
function initCourseProgress() {
    const courseProgress = new CourseProgressManager();
    
    // 获取当前课程ID
    const currentPath = window.location.pathname;
    const courseMatch = currentPath.match(/course(\d+)/);
    const courseId = courseMatch ? `course${courseMatch[1]}` : 'course1';
    
    // 渲染初始进度
    courseProgress.renderProgress(courseId);
    
    // 绑定事件监听器
    document.addEventListener('DOMContentLoaded', () => {
        const increaseBtn = document.getElementById('increase-progress');
        const decreaseBtn = document.getElementById('decrease-progress');
        const completeBtn = document.getElementById('complete-course');
        
        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                courseProgress.increaseProgress(courseId);
            });
        }
        
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                courseProgress.decreaseProgress(courseId);
            });
        }
        
        if (completeBtn) {
            completeBtn.addEventListener('click', () => {
                courseProgress.completeCourse(courseId);
            });
        }
        
        // 开始学习按钮
        const startBtn = document.querySelector('.enroll-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                const currentProgress = courseProgress.getCourseProgress(courseId).progress;
                if (currentProgress === 0) {
                    courseProgress.updateCourseProgress(courseId, 5);
                }
            });
        }
    });
    
    // 定期更新最后访问时间
    setInterval(() => {
        const progress = JSON.parse(localStorage.getItem('course_progress'));
        if (progress.courses[courseId]) {
            progress.courses[courseId].lastAccess = new Date().toISOString();
            localStorage.setItem('course_progress', JSON.stringify(progress));
        }
    }, 60000); // 每分钟更新一次
    
    return courseProgress;
}

// 初始化进度系统
const progressManager = initCourseProgress();

// 导出供全局使用
window.CourseProgressManager = CourseProgressManager;
window.progressManager = progressManager;