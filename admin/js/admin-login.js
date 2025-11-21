// 管理员登录功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('password-toggle');
    const messageDiv = document.getElementById('message');
    const loginBtn = document.querySelector('.login-btn');
    const loginText = document.getElementById('login-text');
    const loginSpinner = document.getElementById('login-spinner');
    
    // 模拟管理员账户
    const adminCredentials = {
        username: 'songchunyan',
        password: '012345678'
    };
    
    // 密码显示/隐藏切换
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // 切换图标
        if (type === 'text') {
            passwordToggle.classList.remove('fa-eye');
            passwordToggle.classList.add('fa-eye-slash');
        } else {
            passwordToggle.classList.remove('fa-eye-slash');
            passwordToggle.classList.add('fa-eye');
        }
    });
    
    // 表单提交处理
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        // 验证输入
        if (!username || !password) {
            showMessage('请输入账号和密码', 'error');
            return;
        }
        
        // 显示加载状态
        showLoading(true);
        
        // 模拟网络延迟
        setTimeout(() => {
            // 模拟登录验证
            if (username === adminCredentials.username && password === adminCredentials.password) {
                // 登录成功
                sessionStorage.setItem('adminLoggedIn', 'true');
                sessionStorage.setItem('adminUsername', username);
                
                showMessage('登录成功，正在跳转...', 'success');
                
                // 延迟跳转
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                showLoading(false);
                showMessage('账号或密码错误，请重试', 'error');
                // 清空密码输入框
                passwordInput.value = '';
                passwordInput.focus();
            }
        }, 800);
    });

    // 显示消息
    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        if (type === 'error') {
            // 错误消息3秒后自动隐藏
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
        }
    }
    
    // 显示/隐藏加载状态
    function showLoading(show) {
        if (show) {
            loginBtn.disabled = true;
            loginText.style.display = 'none';
            loginSpinner.style.display = 'inline-block';
        } else {
            loginBtn.disabled = false;
            loginText.style.display = 'inline';
            loginSpinner.style.display = 'none';
        }
    }



    // 输入框焦点效果
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.form-group').classList.remove('focused');
            }
        });
    });

    // 键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // Enter键提交表单
        if (e.key === 'Enter' && (e.target === usernameInput || e.target === passwordInput)) {
            e.preventDefault();
            loginForm.dispatchEvent(new Event('submit'));
        }
        
        // Escape键清除错误消息
        if (e.key === 'Escape') {
            messageDiv.style.display = 'none';
        }
    });

    // 防止浏览器自动填充样式问题
    setTimeout(() => {
        inputs.forEach(input => {
            if (input.value) {
                input.closest('.form-group').classList.add('focused');
            }
        });
    }, 100);
});

// 忘记密码功能
function showForgotPassword() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '请联系系统管理员重置密码';
    messageDiv.className = 'message';
    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = '#e6f3ff';
    messageDiv.style.color = '#0066cc';
    messageDiv.style.border = '1px solid #b3d9ff';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 4000);
}