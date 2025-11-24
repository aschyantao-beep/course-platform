/**
 * 用户认证页面管理
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