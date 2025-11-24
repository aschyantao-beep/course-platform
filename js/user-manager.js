/**
 * 用户状态管理器
 * 处理用户登录状态、数据同步和UI更新
 */

class UserManager {
    constructor() {
        this.supabase = window.supabase;
        this.dataManager = window.dataManager;
        this.currentUser = null;
        this.isLoggedIn = false;
        this.init();
    }

    init() {
        // 检查用户认证状态
        this.checkAuthStatus();

        // 设置事件监听器
        this.setupEventListeners();

        // 初始化UI
        this.updateUserUI();
    }

    // 检查认证状态
    async checkAuthStatus() {
        try {
            const { data: { session } } = await this.supabase.auth.getSession();

            if (session && session.user) {
                this.currentUser = session.user;
                this.isLoggedIn = true;
                console.log('用户已登录:', session.user);

                // 触发登录成功回调
                this.onUserLogin(session.user);
            } else {
                this.currentUser = null;
                this.isLoggedIn = false;
                console.log('用户未登录');
            }
        } catch (error) {
            console.error('检查认证状态失败:', error);
            this.currentUser = null;
            this.isLoggedIn = false;
        }
    }

    // 设置事件监听器
    setupEventListeners() {
        // 监听认证状态变化
        this.supabase.auth.onAuthStateChange((event, session) => {
            console.log('认证状态变化:', event, session);

            if (event === 'SIGNED_IN' && session && session.user) {
                this.currentUser = session.user;
                this.isLoggedIn = true;
                this.onUserLogin(session.user);
            } else if (event === 'SIGNED_OUT') {
                this.currentUser = null;
                this.isLoggedIn = false;
                this.onUserLogout();
            }
        });

        // 监听用户菜单点击事件
        document.addEventListener('click', (e) => {
            const userMenuItem = e.target.closest('.user-menu-item');
            const logoutBtn = e.target.closest('#logout-btn');

            if (userMenuItem && !e.target.closest('.user-dropdown')) {
                e.preventDefault();
                this.toggleUserDropdown();
            } else if (!e.target.closest('.user-menu-item')) {
                this.hideUserDropdown();
            }

            if (logoutBtn) {
                e.preventDefault();
                this.logout();
                this.hideUserDropdown();
            }
        });
    }

    // 用户登录成功回调
    async onUserLogin(user) {
        console.log('用户登录成功:', user);

        // 更新UI
        this.updateUserUI();

        // 同步本地数据到云端
        await this.syncLocalData();

        // 显示欢迎消息
        this.showWelcomeMessage(user);
    }

    // 用户登出回调
    onUserLogout() {
        console.log('用户已登出');

        // 清除本地缓存
        localStorage.removeItem('currentUserId');

        // 更新UI
        this.updateUserUI();

        // 显示登出消息
        this.showLogoutMessage();
    }

    // 同步本地数据到云端
    async syncLocalData() {
        if (!this.isLoggedIn || !this.currentUser) return;

        try {
            console.log('开始同步本地数据到云端...');

            // 获取本地学习数据
            const learningData = JSON.parse(localStorage.getItem('learningData') || '{}');
            const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
            const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');

            // 同步学习会话
            await this.syncLearningSessions(learningData);

            // 同步学习进度
            await this.syncCourseProgress(courseProgress);

            // 同步测验结果
            await this.syncQuizResults(quizResults);

            // 清空本地数据（可选）
            this.clearLocalData();

            console.log('本地数据同步完成');
        } catch (error) {
            console.error('同步数据失败:', error);
        }
    }

    // 同步学习会话
    async syncLearningSessions(learningData) {
        try {
            const sessions = [];

            Object.keys(learningData).forEach(date => {
                learningData[date].forEach(session => {
                    sessions.push({
                        user_id: this.currentUser.id,
                        course_id: session.courseId || 'unknown',
                        page_type: session.pageInfo?.type || 'other',
                        start_time: new Date(session.startTime).toISOString(),
                        end_time: new Date(session.endTime).toISOString(),
                        duration: Math.round(session.duration / 1000), // 转换为秒
                        is_completed: session.isComplete,
                        created_at: new Date(session.timestamp).toISOString()
                    });
                });
            });

            if (sessions.length > 0) {
                const { data, error } = await this.supabase
                    .from('learning_sessions')
                    .insert(sessions);

                if (error) throw error;
                console.log(`同步了 ${sessions.length} 条学习会话记录`);
            }
        } catch (error) {
            console.error('同步学习会话失败:', error);
        }
    }

    // 同步课程进度
    async syncCourseProgress(courseProgress) {
        try {
            const progressRecords = [];

            Object.values(courseProgress).forEach(progress => {
                progressRecords.push({
                    user_id: this.currentUser.id,
                    course_id: progress.courseId,
                    lessons_completed: progress.lessonsCompleted,
                    total_lessons: progress.totalLessons,
                    progress_percentage: progress.progressPercentage,
                    last_accessed: new Date(progress.lastAccessTime).toISOString(),
                    updated_at: new Date().toISOString()
                });
            });

            if (progressRecords.length > 0) {
                const { data, error } = await this.supabase
                    .from('user_progress')
                    .upsert(progressRecords);

                if (error) throw error;
                console.log(`同步了 ${progressRecords.length} 条课程进度记录`);
            }
        } catch (error) {
            console.error('同步课程进度失败:', error);
        }
    }

    // 同步测验结果
    async syncQuizResults(quizResults) {
        try {
            const results = [];

            Object.keys(quizResults).forEach(courseId => {
                quizResults[courseId].forEach(result => {
                    if (result.courseId && result.score !== undefined) {
                        results.push({
                            user_id: this.currentUser.id,
                            course_id: result.courseId,
                            total_questions: result.totalQuestions,
                            correct_answers: result.correctAnswers,
                            score: result.score,
                            time_spent: result.timeSpent || 0,
                            created_at: new Date(result.timestamp).toISOString()
                        });
                    }
                });
            });

            if (results.length > 0) {
                const { data, error } = await this.supabase
                    .from('quiz_results')
                    .insert(results);

                if (error) throw error;
                console.log(`同步了 ${results.length} 条测验结果记录`);
            }
        } catch (error) {
            console.error('同步测验结果失败:', error);
        }
    }

    // 清空本地数据
    clearLocalData() {
        localStorage.removeItem('learningData');
        localStorage.removeItem('courseProgress');
        localStorage.removeItem('quizResults');
        console.log('本地数据已清空');
    }

    // 登出
    async logout() {
        try {
            const { error } = await this.supabase.auth.signOut();

            if (error) {
                throw error;
            }

            // 登出成功（auth state change 会处理UI更新）
            console.log('登出成功');

        } catch (error) {
            console.error('登出失败:', error);
            this.showMessage('登出失败，请重试', 'error');
        }
    }

    // 切换用户下拉菜单
    toggleUserDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            const isVisible = dropdown.style.display === 'block';
            dropdown.style.display = isVisible ? 'none' : 'block';
        }
    }

    // 隐藏用户下拉菜单
    hideUserDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    // 更新用户UI
    updateUserUI() {
        const loginLink = document.querySelector('.user-login-link');
        const loginText = document.querySelector('.login-text');
        const userName = document.getElementById('current-user-name');
        const userEmail = document.getElementById('current-user-email');
        const logoutBtn = document.getElementById('logout-btn');
        const dropdown = document.getElementById('user-dropdown');

        if (this.isLoggedIn && this.currentUser) {
            // 用户已登录
            const displayName = this.currentUser.user_metadata?.name ||
                              this.currentUser.email?.split('@')[0] ||
                              '用户';

            if (loginText) loginText.textContent = displayName;
            if (userName) userName.textContent = displayName;
            if (userEmail) userEmail.textContent = this.currentUser.email || '';
            if (logoutBtn) logoutBtn.style.display = 'flex';
            if (dropdown) dropdown.style.display = 'none';

            // 更新登录链接行为
            if (loginLink) {
                loginLink.onclick = (e) => {
                    e.preventDefault();
                    this.toggleUserDropdown();
                };
            }
        } else {
            // 用户未登录
            if (loginText) loginText.textContent = '登录/注册';
            if (userName) userName.textContent = '游客';
            if (userEmail) userEmail.textContent = '未登录';
            if (logoutBtn) logoutBtn.style.display = 'none';

            // 恢复登录链接行为
            if (loginLink) {
                loginLink.onclick = null;
            }
        }
    }

    // 显示欢迎消息
    showWelcomeMessage(user) {
        const displayName = user.user_metadata?.name || user.email?.split('@')[0] || '用户';
        this.showMessage(`欢迎回来，${displayName}！`, 'success');
    }

    // 显示登出消息
    showLogoutMessage() {
        this.showMessage('您已成功退出登录', 'info');
    }

    // 显示消息
    showMessage(text, type = 'info') {
        // 创建消息元素
        const message = document.createElement('div');
        message.className = `user-message ${type}`;
        message.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' :
                           type === 'error' ? 'fa-exclamation-circle' :
                           'fa-info-circle'}"></i>
            ${text}
        `;

        // 添加样式
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' :
                          type === 'error' ? '#f56565' : '#4299e1'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            max-width: 300px;
            word-wrap: break-word;
        `;

        document.body.appendChild(message);

        // 自动消失
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 4000);
    }

    // 获取用户状态
    getUserStatus() {
        return {
            isLoggedIn: this.isLoggedIn,
            currentUser: this.currentUser
        };
    }
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 等待 supabase-client 和 dataManager 初始化
    setTimeout(() => {
        if (window.supabase) {
            window.userManager = new UserManager();
        } else {
            console.error('Supabase客户端未初始化');
        }
    }, 1000);
});

// 导出到全局
window.UserManager = UserManager;