// 管理员仪表板JavaScript - 现代化交互功能

class AdminDashboard {
    constructor() {
        this.quizData = [];
        this.progressData = [];
        this.currentSort = { field: 'score', direction: 'desc' };
        this.currentFilters = {};
        this.charts = {};
        
        this.init();
    }

    init() {
        this.loadData();
        this.initEventListeners();
        this.initCharts();
        this.updateLastUpdateTime();
        
        // 定期刷新数据
        setInterval(() => {
            this.loadData();
            this.updateLastUpdateTime();
        }, 30000); // 每30秒刷新一次
    }

    // 加载数据
    loadData() {
        this.loadQuizData();
        this.loadProgressData();
        this.updateStatistics();
    }

    // 加载答题数据
    loadQuizData() {
        // 模拟从localStorage和实际数据源获取答题数据
        const mockQuizData = [
            {
                id: 1,
                name: '张三',
                questionsAnswered: 45,
                correctAnswers: 38,
                accuracy: 84.4,
                averageScore: 87,
                lastQuizTime: '2024-01-15 14:30'
            },
            {
                id: 2,
                name: '李四',
                questionsAnswered: 32,
                correctAnswers: 28,
                accuracy: 87.5,
                averageScore: 89,
                lastQuizTime: '2024-01-15 16:45'
            },
            {
                id: 3,
                name: '王五',
                questionsAnswered: 28,
                correctAnswers: 22,
                accuracy: 78.6,
                averageScore: 82,
                lastQuizTime: '2024-01-15 10:20'
            },
            {
                id: 4,
                name: '赵六',
                questionsAnswered: 51,
                correctAnswers: 46,
                accuracy: 90.2,
                averageScore: 92,
                lastQuizTime: '2024-01-15 18:15'
            },
            {
                id: 5,
                name: '钱七',
                questionsAnswered: 19,
                correctAnswers: 15,
                accuracy: 78.9,
                averageScore: 79,
                lastQuizTime: '2024-01-14 20:30'
            }
        ];

        // 尝试从localStorage获取实际数据
        try {
            const storedQuizResults = localStorage.getItem('quizResults');
            if (storedQuizResults) {
                const quizResults = JSON.parse(storedQuizResults);
                // 处理实际的答题数据
                this.processRealQuizData(quizResults);
            }
        } catch (error) {
            console.log('使用模拟答题数据');
        }

        this.quizData = mockQuizData;
        this.renderQuizLeaderboard();
    }

    // 处理真实答题数据
    processRealQuizData(quizResults) {
        try {
            const processedData = [];
            const userStats = {};
            
            // 获取学习时长数据
            const learningData = JSON.parse(localStorage.getItem('learningData') || '{}');
            const userLearningStats = this.calculateUserLearningStats(learningData);
            
            // 处理答题数据
            Object.keys(quizResults).forEach(courseId => {
                const courseResults = quizResults[courseId];
                
                courseResults.forEach(result => {
                    const userId = result.userId || 'unknown';
                    
                    if (!userStats[userId]) {
                        userStats[userId] = {
                            userId: userId,
                            userName: this.getUserName(userId),
                            totalQuestions: 0,
                            totalCorrect: 0,
                            totalAttempts: 0,
                            scores: [],
                            lastQuizTime: 0,
                            coursesAttempted: new Set(),
                            learningTime: userLearningStats[userId] ? userLearningStats[userId].totalTime : 0
                        };
                    }
                    
                    const userStat = userStats[userId];
                    userStat.totalQuestions += result.totalQuestions || 0;
                    userStat.totalCorrect += result.correctAnswers || 0;
                    userStat.totalAttempts += 1;
                    userStat.scores.push(result.score || 0);
                    userStat.lastQuizTime = Math.max(userStat.lastQuizTime, result.completedAt || 0);
                    userStat.coursesAttempted.add(courseId);
                });
            });
            
            // 转换为显示格式
            Object.values(userStats).forEach(userStat => {
                const accuracy = userStat.totalQuestions > 0 ? 
                    (userStat.totalCorrect / userStat.totalQuestions * 100) : 0;
                const averageScore = userStat.scores.length > 0 ? 
                    userStat.scores.reduce((sum, score) => sum + score, 0) / userStat.scores.length : 0;
                
                processedData.push({
                    rank: 0, // 将在排序后设置
                    userName: userStat.userName,
                    questionsAnswered: userStat.totalQuestions,
                    accuracy: accuracy,
                    averageScore: averageScore,
                    correctAnswers: userStat.totalCorrect,
                    lastQuizTime: userStat.lastQuizTime,
                    coursesCount: userStat.coursesAttempted.size,
                    learningTime: userStat.learningTime
                });
            });
            
            // 按准确率排序并设置排名
            processedData.sort((a, b) => b.accuracy - a.accuracy);
            processedData.forEach((item, index) => {
                item.rank = index + 1;
            });
            
            this.quizData = processedData;
            console.log('处理真实答题数据完成:', processedData);
            
        } catch (error) {
            console.error('处理真实答题数据失败:', error);
        }
    }

    // 加载学习进度数据
    loadProgressData() {
        const courseNames = {
            'course1': 'JavaScript基础',
            'course2': 'React开发',
            'course3': 'Node.js后端',
            'course4': 'Python编程',
            'course5': '数据库设计',
            'course6': '前端框架',
            'course7': '云计算DevOps',
            'course8': '移动应用开发',
            'course9': '区块链技术',
            'course10': '数据看板'
        };

        const mockProgressData = [
            { user: '张三', course: 'JavaScript基础', progress: 85, time: '12小时', status: '进行中', lastAccess: '2024-01-15' },
            { user: '张三', course: 'React开发', progress: 100, time: '8小时', status: '已完成', lastAccess: '2024-01-14' },
            { user: '李四', course: 'JavaScript基础', progress: 92, time: '10小时', status: '进行中', lastAccess: '2024-01-15' },
            { user: '李四', course: 'Python编程', progress: 67, time: '15小时', status: '进行中', lastAccess: '2024-01-15' },
            { user: '王五', course: 'Node.js后端', progress: 45, time: '6小时', status: '进行中', lastAccess: '2024-01-14' },
            { user: '王五', course: '数据库设计', progress: 100, time: '20小时', status: '已完成', lastAccess: '2024-01-13' },
            { user: '赵六', course: '前端框架', progress: 78, time: '14小时', status: '进行中', lastAccess: '2024-01-15' },
            { user: '赵六', course: '云计算DevOps', progress: 34, time: '5小时', status: '进行中', lastAccess: '2024-01-15' },
            { user: '钱七', course: '移动应用开发', progress: 23, time: '3小时', status: '进行中', lastAccess: '2024-01-14' }
        ];

        // 尝试从localStorage获取实际进度数据
        try {
            const courseProgressManager = localStorage.getItem('courseProgress');
            if (courseProgressManager) {
                const progressData = JSON.parse(courseProgressManager);
                // 处理实际的进度数据
                this.processRealProgressData(progressData, courseNames);
            }
        } catch (error) {
            console.log('使用模拟进度数据');
        }

        this.progressData = mockProgressData;
        this.renderProgressTable();
        this.updateProgressChart();
    }

    // 处理真实进度数据
    processRealProgressData(progressData, courseNames) {
        try {
            const processedData = [];
            const learningData = JSON.parse(localStorage.getItem('learningData') || '{}');
            const userLearningStats = this.calculateUserLearningStats(learningData);
            
            Object.keys(progressData).forEach(userId => {
                const userProgress = progressData[userId];
                const userStats = userLearningStats[userId] || { totalTime: 0, courseStats: {} };
                
                Object.keys(userProgress).forEach(courseId => {
                    const progress = userProgress[courseId];
                    const courseName = courseNames[courseId] || this.getCourseNameById(courseId);
                    const courseStats = userStats.courseStats[courseId] || { totalTime: 0, lastAccess: 0 };
                    
                    processedData.push({
                        user: this.getUserName(userId),
                        course: courseName,
                        progress: Math.round(progress.progress || 0),
                        time: this.formatLearningTime(courseStats.totalTime),
                        status: progress.progress >= 100 ? '已完成' : progress.progress > 0 ? '进行中' : '未开始',
                        lastAccess: this.formatDate(courseStats.lastAccess || Date.now())
                    });
                });
            });
            
            this.progressData = processedData;
            console.log('处理真实进度数据完成:', processedData);
            
        } catch (error) {
            console.error('处理真实进度数据失败:', error);
        }
    }
    
    // 计算用户学习统计
    calculateUserLearningStats(learningData) {
        const userStats = {};
        
        Object.keys(learningData).forEach(date => {
            learningData[date].forEach(session => {
                const userId = session.userId;
                
                if (!userStats[userId]) {
                    userStats[userId] = {
                        totalTime: 0,
                        sessionCount: 0,
                        courseStats: {}
                    };
                }
                
                userStats[userId].totalTime += session.duration;
                userStats[userId].sessionCount++;
                
                if (session.courseId && session.courseId !== 'unknown') {
                    if (!userStats[userId].courseStats[session.courseId]) {
                        userStats[userId].courseStats[session.courseId] = {
                            totalTime: 0,
                            sessionCount: 0,
                            lastAccess: 0
                        };
                    }
                    
                    const courseStats = userStats[userId].courseStats[session.courseId];
                    courseStats.totalTime += session.duration;
                    courseStats.sessionCount++;
                    courseStats.lastAccess = Math.max(courseStats.lastAccess, session.timestamp);
                }
            });
        });
        
        return userStats;
    }
    
    // 获取用户名称
    getUserName(userId) {
        // 简化的用户名生成，实际应用中应该从用户数据库获取
        const userNames = {
            'user_1': '张三',
            'user_2': '李四',
            'user_3': '王五',
            'user_4': '赵六',
            'user_5': '钱七'
        };
        
        return userNames[userId] || `用户${userId.slice(-4)}`;
    }
    
    // 格式化学习时长
    formatLearningTime(milliseconds) {
        if (!milliseconds || milliseconds < 0) return '0分钟';
        
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 0) {
            return `${hours}小时${minutes > 0 ? minutes + '分钟' : ''}`;
        } else {
            return `${minutes}分钟`;
        }
    }
    
    // 格式化日期
    formatDate(timestamp) {
        if (!timestamp) return '未知';
        
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0];
    }

    // 更新统计数据
    updateStatistics() {
        // 答题统计
        const totalQuestions = this.quizData.reduce((sum, user) => sum + user.questionsAnswered, 0);
        const totalCorrect = this.quizData.reduce((sum, user) => sum + user.correctAnswers, 0);
        const averageAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100).toFixed(1) : 0;
        const averageScore = this.quizData.length > 0 ? 
            (this.quizData.reduce((sum, user) => sum + user.averageScore, 0) / this.quizData.length).toFixed(0) : 0;
        const activeUsers = this.quizData.length;

        // 更新答题统计卡片
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('accuracy-rate').textContent = averageAccuracy + '%';
        document.getElementById('average-score').textContent = averageScore;
        document.getElementById('active-users').textContent = activeUsers;

        // 进度统计
        const completedCourses = this.progressData.filter(item => item.status === '已完成').length;
        const inProgressCourses = this.progressData.filter(item => item.status === '进行中').length;
        const notStartedCourses = Math.max(0, 10 * activeUsers - completedCourses - inProgressCourses);
        const overallCompletion = this.progressData.length > 0 ? 
            (this.progressData.reduce((sum, item) => sum + item.progress, 0) / this.progressData.length).toFixed(0) : 0;

        // 更新进度统计
        document.getElementById('overall-completion').textContent = overallCompletion + '%';
        document.getElementById('completed-courses').textContent = completedCourses;
        document.getElementById('in-progress-courses').textContent = inProgressCourses;
        document.getElementById('not-started-courses').textContent = notStartedCourses;

        // 底部统计
        document.getElementById('total-users').textContent = activeUsers;
        document.getElementById('daily-active').textContent = Math.floor(activeUsers * 0.7);
        document.getElementById('weekly-new').textContent = Math.floor(activeUsers * 0.2);
    }

    // 渲染答题排行榜
    renderQuizLeaderboard() {
        const tbody = document.getElementById('quiz-leaderboard-body');
        if (!tbody) return;

        // 排序数据
        const sortedData = [...this.quizData].sort((a, b) => {
            const aVal = a[this.currentSort.field];
            const bVal = b[this.currentSort.field];
            
            if (this.currentSort.direction === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        tbody.innerHTML = sortedData.map((user, index) => {
            const userName = user.userName || user.name || '未知用户';
            const lastQuizTime = user.lastQuizTime ? this.formatDate(user.lastQuizTime) : '未知';
            const learningTime = user.learningTime ? this.formatLearningTime(user.learningTime) : '0分钟';
            
            return `
                <tr>
                    <td>
                        <div class="rank-badge ${index < 3 ? 'top-rank' : ''}">
                            ${index + 1}
                        </div>
                    </td>
                    <td>
                        <div class="user-info">
                            <div class="user-avatar">
                                ${userName.charAt(0)}
                            </div>
                            <div class="user-details">
                                <span class="user-name">${userName}</span>
                                <small class="learning-time">学习时长: ${learningTime}</small>
                            </div>
                        </div>
                    </td>
                    <td>${user.questionsAnswered || 0}</td>
                    <td>
                        <div class="accuracy-bar">
                            <div class="accuracy-fill" style="width: ${user.accuracy || 0}%"></div>
                            <span class="accuracy-text">${(user.accuracy || 0).toFixed(1)}%</span>
                        </div>
                    </td>
                    <td>
                        <span class="score-badge ${(user.averageScore || 0) >= 90 ? 'excellent' : (user.averageScore || 0) >= 80 ? 'good' : 'average'}">
                            ${(user.averageScore || 0).toFixed(0)}
                        </span>
                    </td>
                    <td>${lastQuizTime}</td>
                </tr>
            `;
        }).join('');

        // 添加表格样式
        this.addTableStyles();
    }

    // 渲染进度表格
    renderProgressTable() {
        const tbody = document.getElementById('progress-table-body');
        if (!tbody) return;

        let filteredData = [...this.progressData];

        // 应用筛选
        if (this.currentFilters.course && this.currentFilters.course !== 'all') {
            filteredData = filteredData.filter(item => 
                item.course === this.getCourseNameById(this.currentFilters.course)
            );
        }

        if (this.currentFilters.status && this.currentFilters.status !== 'all') {
            const statusMap = {
                'completed': '已完成',
                'in-progress': '进行中',
                'not-started': '未开始'
            };
            filteredData = filteredData.filter(item => 
                item.status === statusMap[this.currentFilters.status]
            );
        }

        tbody.innerHTML = filteredData.map(item => `
            <tr>
                <td>
                    <div class="user-info">
                        <div class="user-avatar">
                            ${item.user.charAt(0)}
                        </div>
                        <span class="user-name">${item.user}</span>
                    </div>
                </td>
                <td>${item.course}</td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.progress}%"></div>
                        <span class="progress-text">${item.progress}%</span>
                    </div>
                </td>
                <td>${item.time}</td>
                <td>
                    <span class="status-badge ${item.status === '已完成' ? 'completed' : item.status === '进行中' ? 'in-progress' : 'not-started'}">
                        ${item.status}
                    </span>
                </td>
                <td>${item.lastAccess}</td>
            </tr>
        `).join('');
    }

    // 获取课程名称
    getCourseNameById(courseId) {
        const courseNames = {
            'course1': 'JavaScript基础',
            'course2': 'React开发',
            'course3': 'Node.js后端',
            'course4': 'Python编程',
            'course5': '数据库设计',
            'course6': '前端框架',
            'course7': '云计算DevOps',
            'course8': '移动应用开发',
            'course9': '区块链技术',
            'course10': '数据看板'
        };
        return courseNames[courseId] || courseId;
    }

    // 初始化图表
    initCharts() {
        this.initProgressChart();
    }

    // 初始化进度图表
    initProgressChart() {
        const ctx = document.getElementById('overall-progress-chart');
        if (!ctx) return;

        this.charts.progressChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['已完成', '进行中', '未开始'],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: [
                        '#48bb78',
                        '#4299e1',
                        '#e2e8f0'
                    ],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1000
                }
            }
        });
    }

    // 更新进度图表
    updateProgressChart() {
        if (!this.charts.progressChart) return;

        const completedCourses = this.progressData.filter(item => item.status === '已完成').length;
        const inProgressCourses = this.progressData.filter(item => item.status === '进行中').length;
        const activeUsers = this.quizData.length;
        const notStartedCourses = Math.max(0, 10 * activeUsers - completedCourses - inProgressCourses);

        this.charts.progressChart.data.datasets[0].data = [completedCourses, inProgressCourses, notStartedCourses];
        this.charts.progressChart.update();
    }

    // 初始化事件监听器
    initEventListeners() {
        // 表格排序
        document.querySelectorAll('.sortable').forEach(th => {
            th.addEventListener('click', (e) => {
                const field = th.dataset.sort;
                if (this.currentSort.field === field) {
                    this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    this.currentSort.field = field;
                    this.currentSort.direction = 'desc';
                }
                this.renderQuizLeaderboard();
                this.updateSortIndicators();
            });
        });

        // 筛选器
        const courseFilter = document.getElementById('course-filter');
        const progressFilter = document.getElementById('progress-filter');
        
        if (courseFilter) {
            courseFilter.addEventListener('change', (e) => {
                this.currentFilters.course = e.target.value;
                this.renderProgressTable();
            });
        }

        if (progressFilter) {
            progressFilter.addEventListener('change', (e) => {
                this.currentFilters.status = e.target.value;
                this.renderProgressTable();
            });
        }

        // 搜索功能
        const globalSearch = document.getElementById('global-search');
        if (globalSearch) {
            globalSearch.addEventListener('input', (e) => {
                this.handleGlobalSearch(e.target.value);
            });
        }
    }

    // 处理全局搜索
    handleGlobalSearch(query) {
        if (!query.trim()) {
            this.renderQuizLeaderboard();
            this.renderProgressTable();
            return;
        }

        // 搜索答题数据
        const filteredQuizData = this.quizData.filter(user => 
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        
        // 搜索进度数据
        const filteredProgressData = this.progressData.filter(item => 
            item.user.toLowerCase().includes(query.toLowerCase()) ||
            item.course.toLowerCase().includes(query.toLowerCase())
        );

        // 临时更新数据并重新渲染
        const originalQuizData = this.quizData;
        const originalProgressData = this.progressData;
        
        this.quizData = filteredQuizData;
        this.progressData = filteredProgressData;
        
        this.renderQuizLeaderboard();
        this.renderProgressTable();
        
        // 恢复原始数据
        this.quizData = originalQuizData;
        this.progressData = originalProgressData;
    }

    // 更新排序指示器
    updateSortIndicators() {
        document.querySelectorAll('.sortable i').forEach(icon => {
            icon.className = 'fas fa-sort';
        });

        const currentSortTh = document.querySelector(`[data-sort="${this.currentSort.field}"]`);
        if (currentSortTh) {
            const icon = currentSortTh.querySelector('i');
            if (icon) {
                icon.className = this.currentSort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
            }
        }
    }

    // 添加表格样式
    addTableStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .rank-badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #f7fafc;
                color: #4a5568;
                font-weight: 600;
                font-size: 12px;
            }
            .rank-badge.top-rank {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            .user-info {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .user-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
                font-size: 12px;
            }
            .accuracy-bar, .progress-bar {
                position: relative;
                width: 100px;
                height: 20px;
                background: #f1f5f9;
                border-radius: 10px;
                overflow: hidden;
            }
            .accuracy-fill, .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #48bb78, #38a169);
                border-radius: 10px;
                transition: width 0.3s ease;
            }
            .accuracy-text, .progress-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 11px;
                font-weight: 600;
                color: #2d3748;
            }
            .score-badge {
                padding: 4px 8px;
                border-radius: 12px;
                font-weight: 600;
                font-size: 12px;
            }
            .score-badge.excellent {
                background: #f0fff4;
                color: #38a169;
            }
            .score-badge.good {
                background: #ebf8ff;
                color: #3182ce;
            }
            .score-badge.average {
                background: #fef5e7;
                color: #d69e2e;
            }
            .status-badge {
                padding: 4px 8px;
                border-radius: 12px;
                font-weight: 500;
                font-size: 12px;
            }
            .status-badge.completed {
                background: #f0fff4;
                color: #38a169;
            }
            .status-badge.in-progress {
                background: #ebf8ff;
                color: #3182ce;
            }
            .status-badge.not-started {
                background: #f7fafc;
                color: #718096;
            }
        `;
        
        if (!document.querySelector('#table-styles')) {
            style.id = 'table-styles';
            document.head.appendChild(style);
        }
    }

    // 更新最后更新时间
    updateLastUpdateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const lastUpdateElement = document.getElementById('last-update');
        if (lastUpdateElement) {
            lastUpdateElement.textContent = timeString;
        }
    }
}

// 全局函数
function refreshQuizData() {
    if (window.adminDashboard) {
        window.adminDashboard.loadQuizData();
        window.adminDashboard.updateStatistics();
        
        // 显示刷新动画
        const btn = event.target.closest('.refresh-btn');
        const icon = btn.querySelector('i');
        icon.style.animation = 'spin 1s linear';
        setTimeout(() => {
            icon.style.animation = '';
        }, 1000);
    }
}

function exportProgressData() {
    if (window.adminDashboard) {
        const data = window.adminDashboard.progressData;
        const csv = convertToCSV(data);
        downloadCSV(csv, 'learning-progress.csv');
    }
}

function toggleFilters() {
    const filterPanel = document.getElementById('filter-panel');
    if (filterPanel) {
        filterPanel.classList.toggle('active');
    }
}

function applyFilters() {
    const timeRange = document.getElementById('time-range')?.value;
    const accuracyMin = document.getElementById('accuracy-min')?.value;
    const accuracyMax = document.getElementById('accuracy-max')?.value;
    
    // 应用高级筛选逻辑
    console.log('应用筛选:', { timeRange, accuracyMin, accuracyMax });
    
    // 关闭筛选面板
    toggleFilters();
}

function clearFilters() {
    document.getElementById('time-range').value = 'all';
    document.getElementById('accuracy-min').value = '';
    document.getElementById('accuracy-max').value = '';
    
    if (window.adminDashboard) {
        window.adminDashboard.currentFilters = {};
        window.adminDashboard.renderQuizLeaderboard();
        window.adminDashboard.renderProgressTable();
    }
}

// 工具函数
function convertToCSV(data) {
    if (!data || data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => `"${row[header]}"`).join(','))
    ].join('\n');
    
    return csvContent;
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查管理员登录状态
    const isAdminLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isAdminLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    // 初始化仪表板
    window.adminDashboard = new AdminDashboard();
    
    // 设置管理员用户名
    const adminUsername = sessionStorage.getItem('adminUsername') || 'songchunyan';
    const usernameElement = document.getElementById('admin-username');
    if (usernameElement) {
        usernameElement.textContent = adminUsername;
    }
});