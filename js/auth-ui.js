/**
 * 用户认证界面管理
 * 提供登录/注册弹窗功能
 */

class AuthUI {
    constructor() {
        this.isModalOpen = false;
        this.currentMode = 'login'; // 'login' or 'signup'
        this.dataManager = window.dataManager;
        this.init();
    }

    init() {
        this.createAuthModal();
        this.createUserButton();
        this.setupEventListeners();
    }

    // 创建认证弹窗
    createAuthModal() {
        const modalHTML = `
            <div id="auth-modal" class="auth-modal" style="display: none;">
                <div class="auth-modal-backdrop"></div>
                <div class="auth-modal-content">
                    <div class="auth-modal-header">
                        <h3 id="auth-title">登录</h3>
                        <button class="auth-close-btn" id="auth-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <div class="auth-modal-body">
                        <form id="auth-form">
                            <div class="form-group">
                                <label for="auth-email">邮箱地址</label>
                                <input type="email" id="auth-email" required placeholder="请输入邮箱">
                            </div>

                            <div class="form-group">
                                <label for="auth-password">密码</label>
                                <input type="password" id="auth-password" required placeholder="请输入密码">
                            </div>

                            <div class="form-group" id="name-group" style="display: none;">
                                <label for="auth-name">姓名</label>
                                <input type="text" id="auth-name" placeholder="请输入姓名">
                            </div>

                            <button type="submit" class="auth-submit-btn" id="auth-submit">
                                登录
                            </button>
                        </form>

                        <div class="auth-switch">
                            <span id="auth-switch-text">还没有账号？</span>
                            <a href="#" id="auth-switch-link">立即注册</a>
                        </div>

                        <div id="auth-message" class="auth-message" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // 创建用户按钮
    createUserButton() {
        // 检查是否已有用户按钮
        if (document.querySelector('.user-auth-btn')) return;

        const buttonHTML = `
            <div class="user-auth-container">
                <button class="user-auth-btn" id="user-auth-btn">
                    <i class="fas fa-user"></i>
                    <span class="user-text">登录/注册</span>
                </button>
                <div class="user-dropdown" id="user-dropdown" style="display: none;">
                    <div class="user-info">
                        <div class="user-avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="user-details">
                            <div class="user-name">游客</div>
                            <div class="user-email">未登录</div>
                        </div>
                    </div>
                    <div class="user-menu">
                        <a href="#" class="menu-item" id="menu-login">
                            <i class="fas fa-sign-in-alt"></i> 登录
                        </a>
                        <a href="#" class="menu-item" id="menu-logout" style="display: none;">
                            <i class="fas fa-sign-out-alt"></i> 退出登录
                        </a>
                    </div>
                </div>
            </div>
        `;

        // 添加到导航栏
        const navMenu = document.querySelector('.nav-menu, .navbar-right');
        if (navMenu) {
            navMenu.insertAdjacentHTML('beforeend', buttonHTML);
        }
    }

    // 设置事件监听器
    setupEventListeners() {
        // 用户按钮点击
        document.addEventListener('click', (e) => {
            if (e.target.closest('#user-auth-btn')) {
                e.preventDefault();
                this.toggleUserDropdown();
            } else if (!e.target.closest('.user-auth-container')) {
                this.hideUserDropdown();
            }
        });

        // 登录/注册菜单项
        const loginMenu = document.getElementById('menu-login');
        const logoutMenu = document.getElementById('menu-logout');

        if (loginMenu) {
            loginMenu.addEventListener('click', (e) => {
                e.preventDefault();
                this.showModal('login');
                this.hideUserDropdown();
            });
        }

        if (logoutMenu) {
            logoutMenu.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleLogout();
                this.hideUserDropdown();
            });
        }

        // 弹窗事件
        const modal = document.getElementById('auth-modal');
        const closeBtn = document.getElementById('auth-close');
        const switchLink = document.getElementById('auth-switch-link');
        const form = document.getElementById('auth-form');
        const backdrop = document.querySelector('.auth-modal-backdrop');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hideModal());
        }

        if (backdrop) {
            backdrop.addEventListener('click', () => this.hideModal());
        }

        if (switchLink) {
            switchLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchMode();
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAuth();
            });
        }

        // 监听用户状态变化
        if (this.dataManager && this.dataManager.auth) {
            const originalOnUserLogin = this.dataManager.auth.onUserLogin.bind(this.dataManager.auth);
            this.dataManager.auth.onUserLogin = (user) => {
                originalOnUserLogin(user);
                this.updateUserUI();
            };

            const originalOnUserLogout = this.dataManager.auth.onUserLogout.bind(this.dataManager.auth);
            this.dataManager.auth.onUserLogout = () => {
                originalOnUserLogout();
                this.updateUserUI();
            };
        }
    }

    // 切换用户下拉菜单
    toggleUserDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        }
    }

    // 隐藏用户下拉菜单
    hideUserDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    // 显示认证弹窗
    showModal(mode = 'login') {
        const modal = document.getElementById('auth-modal');
        const title = document.getElementById('auth-title');
        const submitBtn = document.getElementById('auth-submit');
        const switchText = document.getElementById('auth-switch-text');
        const switchLink = document.getElementById('auth-switch-link');
        const nameGroup = document.getElementById('name-group');

        this.currentMode = mode;

        if (title) title.textContent = mode === 'login' ? '登录' : '注册';
        if (submitBtn) submitBtn.textContent = mode === 'login' ? '登录' : '注册';
        if (switchText) switchText.textContent = mode === 'login' ? '还没有账号？' : '已有账号？';
        if (switchLink) switchLink.textContent = mode === 'login' ? '立即注册' : '立即登录';
        if (nameGroup) nameGroup.style.display = mode === 'signup' ? 'block' : 'none';

        if (modal) {
            modal.style.display = 'flex';
            this.isModalOpen = true;
            this.clearMessage();
        }
    }

    // 隐藏认证弹窗
    hideModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.display = 'none';
            this.isModalOpen = false;
            this.clearForm();
            this.clearMessage();
        }
    }

    // 切换登录/注册模式
    switchMode() {
        this.currentMode = this.currentMode === 'login' ? 'signup' : 'login';
        this.showModal(this.currentMode);
    }

    // 处理认证
    async handleAuth() {
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        const name = document.getElementById('auth-name').value.trim();

        if (!email || !password) {
            this.showMessage('请填写邮箱和密码', 'error');
            return;
        }

        if (this.currentMode === 'signup' && !name) {
            this.showMessage('请填写姓名', 'error');
            return;
        }

        // 显示加载状态
        const submitBtn = document.getElementById('auth-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '处理中...';
        submitBtn.disabled = true;

        try {
            let result;
            if (this.currentMode === 'login') {
                result = await this.dataManager.auth.signIn(email, password);
            } else {
                result = await this.dataManager.auth.signUp(email, password, name);
            }

            if (result.success) {
                this.showMessage(
                    this.currentMode === 'login' ? '登录成功！' : '注册成功！请查收邮箱验证邮件。',
                    'success'
                );

                if (this.currentMode === 'login') {
                    setTimeout(() => {
                        this.hideModal();
                    }, 1000);
                } else {
                    setTimeout(() => {
                        this.showModal('login');
                    }, 2000);
                }
            } else {
                this.showMessage(result.error, 'error');
            }
        } catch (error) {
            this.showMessage('操作失败，请重试', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    // 处理登出
    async handleLogout() {
        const result = await this.dataManager.auth.signOut();
        if (result.success) {
            this.showMessage('已成功退出登录', 'success');
        } else {
            this.showMessage('退出登录失败', 'error');
        }
    }

    // 显示消息
    showMessage(message, type = 'info') {
        const messageEl = document.getElementById('auth-message');
        if (messageEl) {
            messageEl.textContent = message;
            messageEl.className = `auth-message ${type}`;
            messageEl.style.display = 'block';

            // 3秒后自动隐藏成功消息
            if (type === 'success') {
                setTimeout(() => {
                    this.clearMessage();
                }, 3000);
            }
        }
    }

    // 清除消息
    clearMessage() {
        const messageEl = document.getElementById('auth-message');
        if (messageEl) {
            messageEl.style.display = 'none';
            messageEl.textContent = '';
        }
    }

    // 清空表单
    clearForm() {
        const form = document.getElementById('auth-form');
        if (form) {
            form.reset();
        }
    }

    // 更新用户界面
    updateUserUI() {
        const userBtn = document.querySelector('.user-auth-btn .user-text');
        const userName = document.querySelector('.user-name');
        const userEmail = document.querySelector('.user-email');
        const loginMenu = document.getElementById('menu-login');
        const logoutMenu = document.getElementById('menu-logout');

        const user = this.dataManager?.auth?.currentUser;

        if (user) {
            // 用户已登录
            if (userBtn) userBtn.textContent = user.user_metadata?.name || user.email?.split('@')[0] || '用户';
            if (userName) userName.textContent = user.user_metadata?.name || '用户';
            if (userEmail) userEmail.textContent = user.email || '';
            if (loginMenu) loginMenu.style.display = 'none';
            if (logoutMenu) logoutMenu.style.display = 'block';
        } else {
            // 用户未登录
            if (userBtn) userBtn.textContent = '登录/注册';
            if (userName) userName.textContent = '游客';
            if (userEmail) userEmail.textContent = '未登录';
            if (loginMenu) loginMenu.style.display = 'block';
            if (logoutMenu) logoutMenu.style.display = 'none';
        }
    }
}

// 在页面加载完成后初始化认证界面
document.addEventListener('DOMContentLoaded', () => {
    // 等待 dataManager 初始化
    setTimeout(() => {
        window.authUI = new AuthUI();
    }, 1000);
});

// 全局函数，供其他脚本调用
window.showLoginModal = () => {
    if (window.authUI) {
        window.authUI.showModal('login');
    }
};

window.showSignupModal = () => {
    if (window.authUI) {
        window.authUI.showModal('signup');
    }
};