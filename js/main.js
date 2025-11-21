// 平滑滚动到指定区域
document.addEventListener('DOMContentLoaded', function() {
    // 导航链接平滑滚动
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

    // CTA按钮滚动到课程区域
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const coursesSection = document.querySelector('#courses');
            if (coursesSection) {
                coursesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 课程卡片悬停效果增强
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察课程卡片
    courseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // 移动端菜单切换（如果需要）
    const createMobileMenu = () => {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleButton = document.createElement('button');
                toggleButton.className = 'mobile-menu-toggle';
                toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
                toggleButton.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: block;
                `;
                
                navContainer.appendChild(toggleButton);
                
                toggleButton.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                    const icon = toggleButton.querySelector('i');
                    icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
                });
            }
        }
    };

    // 初始化移动端菜单
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // 添加加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });


});

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 返回顶部按钮
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
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
        transition: opacity 0.3s;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    }, 100));
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createBackToTopButton();

// 学习进度功能
class LearningProgress {
    constructor() {
        this.progressManager = new CourseProgressManager();
        this.init();
    }

    init() {
        this.updateProgress();
        this.animateProgressBar();
    }

    updateProgress() {
        const totalProgress = this.progressManager.getTotalProgress();
        const progressFill = document.getElementById('overall-progress-fill');
        const progressText = document.getElementById('overall-progress-text');
        
        if (progressFill && progressText) {
            // 延迟执行动画，让页面先渲染
            setTimeout(() => {
                progressFill.style.width = `${totalProgress}%`;
                progressFill.classList.add('animate');
                
                // 数字动画
                this.animateNumber(progressText, 0, totalProgress, 1500);
            }, 300);
        }
    }

    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用缓动函数
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOutCubic);
            
            element.textContent = `${current}%`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    animateProgressBar() {
        const progressFill = document.getElementById('overall-progress-fill');
        if (progressFill) {
            // 添加进入视口时的动画触发
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.updateProgress();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            const progressSection = document.querySelector('.learning-progress-section');
            if (progressSection) {
                observer.observe(progressSection);
            }
        }
    }

    // 刷新进度
    refresh() {
        this.updateProgress();
    }
}

// 初始化学习进度
if (document.querySelector('.learning-progress-section')) {
    const learningProgress = new LearningProgress();
    
    // 监听存储变化，实时更新进度
    window.addEventListener('storage', function(e) {
        if (e.key && e.key.startsWith('course_progress_')) {
            learningProgress.refresh();
        }
    });
    
    // 定期刷新（每30秒）
    setInterval(() => {
        learningProgress.refresh();
    }, 30000);
}