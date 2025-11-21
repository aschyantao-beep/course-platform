// 课程详情页功能
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到指定区域
    setupSmoothScrolling();
    
    // 设置学习按钮事件
    setupEnrollButton();
    
    // 设置进度条（如果适用）
    setupProgressBar();
    
    // 设置返回顶部按钮
    setupBackToTop();
    
    // 设置分享功能
    setupShareButtons();
    
    // 设置课程测验功能
    setupQuiz();
});

// 平滑滚动功能
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 设置学习按钮
function setupEnrollButton() {
    const enrollBtn = document.querySelector('.enroll-btn');
    
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // 模拟开始学习
            showNotification('课程已添加到您的学习计划！', 'success');
            
            // 保存到本地存储
            saveCourseProgress();
            
            // 更新按钮状态
            this.textContent = '继续学习';
            this.innerHTML = '<i class="fas fa-play"></i> 继续学习';
            this.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            
            // 3秒后跳转到学习页面
            setTimeout(() => {
                // 这里可以跳转到实际的学习页面
                showNotification('正在跳转到学习页面...', 'info');
            }, 3000);
        });
    }
}

// 保存课程进度
function saveCourseProgress() {
    const courseId = getCourseIdFromUrl();
    const courseName = document.querySelector('.course-info h1').textContent;
    
    const progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    
    if (!progress[courseId]) {
        progress[courseId] = {
            name: courseName,
            started: new Date().toISOString(),
            completed: false,
            progress: 0
        };
        
        localStorage.setItem('courseProgress', JSON.stringify(progress));
    }
}

// 从URL获取课程ID
function getCourseIdFromUrl() {
    const path = window.location.pathname;
    const match = path.match(/course(\d+)\.html/);
    return match ? parseInt(match[1]) : 1;
}

// 设置进度条
function setupProgressBar() {
    // 这里可以添加实际的进度条功能
    // 目前只是一个占位符
}

// 设置返回顶部按钮
function setupBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        font-size: 18px;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.transform = 'scale(1)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'scale(0.8)';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 设置分享功能
function setupShareButtons() {
    // 这里可以添加社交分享功能
    const shareData = {
        title: document.querySelector('.course-info h1').textContent,
        text: document.querySelector('.course-subtitle').textContent,
        url: window.location.href
    };
    
    // 检查Web Share API支持
    if (navigator.share) {
        const shareBtn = document.createElement('button');
        shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> 分享课程';
        shareBtn.className = 'share-btn';
        shareBtn.style.cssText = `
            background: #4267B2;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 1rem;
            transition: background 0.3s;
        `;
        
        document.querySelector('.enrollment-section').appendChild(shareBtn);
        
        shareBtn.addEventListener('click', function() {
            navigator.share(shareData)
                .then(() => showNotification('分享成功！', 'success'))
                .catch(() => showNotification('分享已取消', 'info'));
        });
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // 设置不同通知类型的样式
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 设置课程测验功能
function setupQuiz() {
    const submitQuizBtn = document.getElementById('submit-quiz');
    const retryQuizBtn = document.getElementById('retry-quiz');
    const quizResults = document.getElementById('quiz-results');
    const correctCountElement = document.getElementById('correct-count');
    const quizProgressBar = document.getElementById('quiz-progress');
    
    // 定义正确答案
    const correctAnswers = {
        'q1': 'c', // 4周
        'q2': 'a', // 初级
        'q3': 'c'  // 进阶应用
    };
    
    // 提交测验
    if (submitQuizBtn) {
        submitQuizBtn.addEventListener('click', function() {
            let correctCount = 0;
            let totalQuestions = Object.keys(correctAnswers).length;
            
            // 检查每个问题的答案
            for (let question in correctAnswers) {
                const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
                const feedbackElement = document.getElementById(`feedback-${question}`);
                
                if (!selectedOption) {
                    // 未选择答案
                    feedbackElement.textContent = '请选择一个答案';
                    feedbackElement.className = 'feedback incorrect';
                    continue;
                }
                
                if (selectedOption.value === correctAnswers[question]) {
                    // 答案正确
                    correctCount++;
                    feedbackElement.textContent = '正确！';
                    feedbackElement.className = 'feedback correct';
                } else {
                    // 答案错误
                    feedbackElement.textContent = '不正确，请再试一次。';
                    feedbackElement.className = 'feedback incorrect';
                }
            }
            
            // 显示结果
            correctCountElement.textContent = correctCount;
            quizProgressBar.style.width = `${(correctCount / totalQuestions) * 100}%`;
            quizResults.style.display = 'block';
            
            // 保存测验结果
            saveQuizResult(correctCount, totalQuestions);
            
            // 滚动到结果区域
            quizResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // 显示通知
            if (correctCount === totalQuestions) {
                showNotification('恭喜！您已完成所有测验题目！', 'success');
            } else if (correctCount > totalQuestions / 2) {
                showNotification('做得不错！再接再厉！', 'info');
            } else {
                showNotification('继续努力，您可以的！', 'warning');
            }
        });
    }
    
    // 重新测验
    if (retryQuizBtn) {
        retryQuizBtn.addEventListener('click', function() {
            // 清除所有选择
            const radioInputs = document.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(input => {
                input.checked = false;
            });
            
            // 清除所有反馈
            const feedbacks = document.querySelectorAll('.feedback');
            feedbacks.forEach(feedback => {
                feedback.textContent = '';
                feedback.className = 'feedback';
            });
            
            // 隐藏结果
            quizResults.style.display = 'none';
            
            // 滚动到测验顶部
            document.querySelector('.course-quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    // 为选项添加点击效果
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // 清除当前问题的反馈
            const questionId = radio.name;
            const feedbackElement = document.getElementById(`feedback-${questionId}`);
            if (feedbackElement) {
                feedbackElement.textContent = '';
                feedbackElement.className = 'feedback';
            }
        });
    });
}

// 保存测验结果
function saveQuizResult(correctCount, totalQuestions) {
    const courseId = getCourseIdFromUrl();
    const userId = getCurrentUserId();
    const quizResults = JSON.parse(localStorage.getItem('quizResults')) || {};
    
    if (!quizResults[courseId]) {
        quizResults[courseId] = [];
    }
    
    // 添加新的测验结果，包含完整信息
    const quizResult = {
        userId: userId,
        courseId: courseId,
        date: new Date().toISOString(),
        score: correctCount,
        totalQuestions: totalQuestions,
        correctAnswers: correctCount,
        wrongAnswers: totalQuestions - correctCount,
        percentage: Math.round((correctCount / totalQuestions) * 100),
        completedAt: Date.now(),
        timestamp: Date.now()
    };
    
    quizResults[courseId].push(quizResult);
    
    // 只保留最近的10次测验结果
    if (quizResults[courseId].length > 10) {
        quizResults[courseId] = quizResults[courseId].slice(-10);
    }
    
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
    
    // 更新课程进度
    updateCourseProgress(courseId, correctCount, totalQuestions);
}

// 获取或生成用户ID
function getCurrentUserId() {
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('currentUserId', userId);
    }
    return userId;
}

// 更新课程进度
function updateCourseProgress(courseId, correctCount, totalQuestions) {
    const progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    
    if (progress[courseId]) {
        // 如果得分超过70%，将课程进度增加20%
        if ((correctCount / totalQuestions) >= 0.7) {
            progress[courseId].progress = Math.min(100, progress[courseId].progress + 20);
            
            // 如果进度达到100%，标记为完成
            if (progress[courseId].progress >= 100) {
                progress[courseId].completed = true;
                progress[courseId].completedDate = new Date().toISOString();
            }
            
            localStorage.setItem('courseProgress', JSON.stringify(progress));
        }
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .back-to-top:hover {
        transform: translateY(-2px) scale(1.1);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
    
    .share-btn:hover {
        background: #365899;
        transform: translateY(-1px);
    }
`;
document.head.appendChild(style);

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// 打印功能
window.printCourse = function() {
    const printWindow = window.open('', '_blank');
    const courseTitle = document.querySelector('.course-info h1').textContent;
    const courseContent = document.querySelector('.main-content').innerHTML;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${courseTitle} - 打印版</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1, h2, h3 { color: #333; }
                ul { margin-left: 20px; }
                @media print {
                    body { margin: 0; }
                }
            </style>
        </head>
        <body>
            <h1>${courseTitle}</h1>
            ${courseContent}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
};