/**
 * 用户认证UI管理
 * 处理登录、注册页面交互和认证流程
 */

class AuthPageUI {
    constructor() {
        this.supabase = window.supabase;
        this.init();
    }

    init() {
        // 检查用户是否已经登录
        this.checkAuthStatus();
    }

    // 检查认证状态
    async checkAuthStatus() {
        try {
            const { data: { session } } = await this.supabase.auth.getSession();
            if (session) {
                // 用户已登录，跳转到首页
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('检查认证状态失败:', error);
        }
    }

    // 切换标签页
    switchTab(tabName) {
        // 移除所有active类
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.form-content').forEach(content => {
            content.classList.remove('active');
        });

        // 添加active类到选中的标签
        if (tabName === 'login') {
            document.querySelector('.tab-btn:first-child').classList.add('active');
            document.getElementById('login-form').classList.add('active');
        } else {
            document.querySelector('.tab-btn:last-child').classList.add('active');
            document.getElementById('register-form').classList.add('active');
        }

        // 清除消息
        this.hideMessage();
    }

    // 显示消息
    showMessage(text, type = 'error') {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';

        // 自动隐藏成功消息
        if (type === 'success') {
            setTimeout(() => {
                this.hideMessage();
            }, 3000);
        } else {
            // 错误消息5秒后隐藏
            setTimeout(() => {
                this.hideMessage();
            }, 5000);
        }
    }

    // 隐藏消息
    hideMessage() {
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'none';
    }

    // 设置按钮加载状态
    setButtonLoading(buttonId, loading) {
        const button = document.getElementById(buttonId);
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }

    // 处理登录
    async handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        // 验证输入
        if (!email || !password) {
            this.showMessage('请填写邮箱和密码', 'error');
            return;
        }

        // 设置加载状态
        this.setButtonLoading('login-btn', true);
        this.hideMessage();

        try {
            // 调用Supabase登录
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                throw error;
            }

            // 登录成功
            this.showMessage('登录成功，正在跳转...', 'success');

            // 等待一下让用户看到成功消息
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);

        } catch (error) {
            console.error('登录失败:', error);
            let errorMessage = '登录失败，请重试';

            // 根据错误类型显示友好提示
            if (error.message.includes('Invalid login credentials')) {
                errorMessage = '邮箱或密码错误';
            } else if (error.message.includes('Email not confirmed')) {
                errorMessage = '请先验证您的邮箱';
            } else if (error.message.includes('Too many requests')) {
                errorMessage = '请求过于频繁，请稍后再试';
            } else if (error.message) {
                errorMessage = error.message;
            }

            this.showMessage(errorMessage, 'error');
        } finally {
            // 恢复按钮状态
            this.setButtonLoading('login-btn', false);
        }
    }

    // 处理注册
    async handleRegister(event) {
        event.preventDefault();

        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;

        // 验证输入
        if (!name || !email || !password || !confirmPassword) {
            this.showMessage('请填写所有字段', 'error');
            return;
        }

        if (password.length < 6) {
            this.showMessage('密码至少需要6位', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showMessage('两次输入的密码不一致', 'error');
            return;
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('请输入有效的邮箱地址', 'error');
            return;
        }

        // 设置加载状态
        this.setButtonLoading('register-btn', true);
        this.hideMessage();

        try {
            // 调用Supabase注册
            const { data, error } = await this.supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name
                    }
                }
            });

            if (error) {
                throw error;
            }

            // 注册成功
            if (data.user && !data.session) {
                // 邮箱验证模式
                this.showMessage('注册成功！请检查您的邮箱并点击验证链接', 'success');

                // 清空表单
                document.getElementById('register-form').reset();

                // 3秒后切换到登录页
                setTimeout(() => {
                    this.switchTab('login');
                }, 3000);

            } else if (data.session) {
                // 自动登录模式
                this.showMessage('注册成功，正在跳转...', 'success');

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }

        } catch (error) {
            console.error('注册失败:', error);
            let errorMessage = '注册失败，请重试';

            // 根据错误类型显示友好提示
            if (error.message.includes('User already registered')) {
                errorMessage = '该邮箱已被注册，请直接登录';
            } else if (error.message.includes('Password should be at least')) {
                errorMessage = '密码至少需要6位字符';
            } else if (error.message.includes('Invalid email')) {
                errorMessage = '请输入有效的邮箱地址';
            } else if (error.message.includes('Too many requests')) {
                errorMessage = '请求过于频繁，请稍后再试';
            } else if (error.message) {
                errorMessage = error.message;
            }

            this.showMessage(errorMessage, 'error');
        } finally {
            // 恢复按钮状态
            this.setButtonLoading('register-btn', false);
        }
    }
}

// 密码显示/隐藏切换
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';

    // 切换图标
    if (isPassword) {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// 标签页切换
function switchTab(tabName) {
    if (window.authPageUI) {
        window.authPageUI.switchTab(tabName);
    }
}

// 处理登录
function handleLogin(event) {
    if (window.authPageUI) {
        window.authPageUI.handleLogin(event);
    }
}

// 处理注册
function handleRegister(event) {
    if (window.authPageUI) {
        window.authPageUI.handleRegister(event);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    window.authPageUI = new AuthPageUI();
});

// 导出到全局
window.AuthPageUI = AuthPageUI;

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