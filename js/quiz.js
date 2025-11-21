const quizData = {
    1: [
        {
            id: 1,
            question: 'SS的全称是？',
            options: [
                'Sales Specialist',
                'Student Success',
                'Study Supervisor',
                'Service Support'
            ],
            correct: 1,
            explanation: 'SS全称是Student Success，负责学员的成功学习和服务。'
        },
        {
            id: 2,
            question: 'LP的全称是？',
            options: [
                'Learning Partner',
                'Lesson Planner',
                'Learning Provider',
                'Language Partner'
            ],
            correct: 0,
            explanation: 'LP全称是Learning Partner，即学习伙伴，负责学员的学习辅导和支持。'
        },
        {
            id: 3,
            question: 'SS的核心职责不包括以下哪项？',
            options: [
                '课程产品介绍',
                '制定学习计划',
                '学情诊断与总结',
                '异议处理与答疑'
            ],
            correct: 2,
            explanation: '学情诊断与总结不是SS的核心职责范围。'
        },
        {
            id: 4,
            question: 'LP的核心职责中强调哪一项？',
            options: [
                '完成续费目标',
                '保障学员高频上课',
                '设计促销活动',
                '完成财务报表'
            ],
            correct: 1,
            explanation: 'LP的核心职责是保障学员高频上课，确保学习效果。'
        },
        {
            id: 5,
            question: 'SS每月的主要业绩目标是？',
            options: [
                '课耗目标',
                '续费目标',
                '转介绍目标',
                '招聘目标'
            ],
            correct: 1,
            explanation: 'SS的主要业绩目标是完成续费目标。'
        },
        {
            id: 6,
            question: 'LP每月的主要服务目标是？',
            options: [
                '续费目标',
                '转介绍目标',
                '销售额目标',
                '招聘目标'
            ],
            correct: 1,
            explanation: 'LP的主要服务目标是完成转介绍目标。'
        },
        {
            id: 7,
            question: 'SS/LP的过程指标包括？',
            options: [
                '课程研发与培训',
                '每日通时通次和学员覆盖率',
                '财务报表编写',
                'IT/CRM系统运维'
            ],
            correct: 1,
            explanation: 'SS/LP的过程指标包括每日通时通次和学员覆盖率。'
        },
        {
            id: 8,
            question: 'SS岗位最需要重点完成的SOP是？',
            options: [
                '服务相关SOP',
                '招聘相关SOP',
                '业绩相关SOP',
                '财务相关SOP'
            ],
            correct: 2,
            explanation: 'SS岗位最需要重点完成业绩相关SOP。'
        },
        {
            id: 9,
            question: 'LP岗位最需要重点完成的SOP是？',
            options: [
                '服务相关SOP',
                '业绩相关SOP',
                '招聘相关SOP',
                '财务相关SOP'
            ],
            correct: 0,
            explanation: 'LP岗位最需要重点完成服务相关SOP。'
        },
        {
            id: 10,
            question: '教育顾问（SS）的主要沟通工具包括？',
            options: [
                '邮件和CRM系统',
                '电话和本地社媒',
                '财务系统和报表',
                'AI自动客服'
            ],
            correct: 1,
            explanation: 'SS主要通过电话和本地社媒与学员沟通。'
        },
        {
            id: 11,
            question: '班主任（LP）主要通过什么方式与家长沟通？',
            options: [
                '电话和本地社媒',
                '邮件和财务系统',
                'CRM和BI系统',
                '自动化工具'
            ],
            correct: 0,
            explanation: 'LP主要通过电话和本地社媒与家长沟通。'
        },
        {
            id: 12,
            question: 'SS需要重点传达的信息是？',
            options: [
                '学员课耗总结',
                '公司用户政策和活动',
                '财务对账信息',
                '技术支持流程'
            ],
            correct: 1,
            explanation: 'SS需要重点传达公司用户政策和活动信息。'
        },
        {
            id: 13,
            question: 'LP需要重点保障的指标是？',
            options: [
                '成交量',
                '学员高频上课',
                '产品价格调整',
                '招聘达成率'
            ],
            correct: 1,
            explanation: 'LP需要重点保障学员高频上课指标。'
        },
        {
            id: 14,
            question: '成为一名合格的SS/LP，首先需要具备什么？',
            options: [
                '教育情怀和责任心',
                '高级财务知识',
                'IT开发能力',
                '法律合规能力'
            ],
            correct: 0,
            explanation: '成为合格的SS/LP首先需要具备教育情怀和责任心。'
        },
        {
            id: 15,
            question: 'SS/LP的成长要求之一是？',
            options: [
                '不断学习和分享经验',
                '独立完成财务报表',
                '独立完成IT运维',
                '管理海外中心的开设'
            ],
            correct: 0,
            explanation: 'SS/LP需要不断学习和分享经验以促进成长。'
        },
        {
            id: 16,
            question: 'Coach的主要职责是？',
            options: [
                '管理业绩目标',
                '带教新人',
                '财务管理',
                '市场推广'
            ],
            correct: 1,
            explanation: 'Coach的主要职责是带教新人。'
        },
        {
            id: 17,
            question: '一个Coach最多可以带几名新人？',
            options: [
                '2名',
                '3名',
                '4名',
                '5名'
            ],
            correct: 2,
            explanation: '一个Coach最多可以带4名新人。'
        },
        {
            id: 18,
            question: 'TL（Team Leader）通常管理多少个SS/LP？',
            options: [
                '3-5个',
                '8-15个',
                '20-30个',
                '50个以上'
            ],
            correct: 1,
            explanation: 'TL通常管理8-15个SS/LP。'
        },
        {
            id: 19,
            question: 'SM（Sales Manager）一般管理多少个小组？',
            options: [
                '1-2个',
                '2-5个',
                '6-12个',
                '10个以上'
            ],
            correct: 1,
            explanation: 'SM一般管理2-5个小组。'
        },
        {
            id: 20,
            question: 'SD（Sales Director）一般管理多少个小组？',
            options: [
                '2-5个',
                '6-12个',
                '15-20个',
                '20个以上'
            ],
            correct: 1,
            explanation: 'SD一般管理6-12个小组。'
        },
        {
            id: 21,
            question: '学员购买多少金额即记为"大单"？',
            options: [
                '100 USD / 700 RMB',
                '200 USD / 1400 RMB',
                '300 USD / 2100 RMB',
                '400 USD / 2800 RMB'
            ],
            correct: 1,
            explanation: '购买200 USD / 1400 RMB即记为大单。'
        },
        {
            id: 22,
            question: '学员首次购买大单被称为？',
            options: [
                '首购',
                '升舱',
                '到期',
                '过期'
            ],
            correct: 0,
            explanation: '学员首次购买大单被称为首购。'
        },
        {
            id: 23,
            question: '首购期的时间范围是？',
            options: [
                '首次付费当月',
                '首次付费当月及次月',
                '首次付费日+30天',
                '首次付费日+90天'
            ],
            correct: 1,
            explanation: '首购期是首次付费当月及次月。'
        },
        {
            id: 24,
            question: '升舱期从何时开始？',
            options: [
                '首单当天',
                '首单30天后',
                '首单结束当月',
                '次单购买后'
            ],
            correct: 1,
            explanation: '升舱期从首单30天后开始。'
        },
        {
            id: 25,
            question: '首月升舱期的时间范围是？',
            options: [
                '首单第1天起至第30天',
                '首单第31天起至报名月+1个月',
                '首单月+2个月',
                '首单月+3个月'
            ],
            correct: 1,
            explanation: '首月升舱期是从首单第31天起至报名月+1个月。'
        },
        {
            id: 26,
            question: '次月升舱期的时间范围是？',
            options: [
                '报名月+1个月',
                '报名月+2个月',
                '报名月+3个月',
                '报名月+4个月'
            ],
            correct: 1,
            explanation: '次月升舱期是报名月+2个月。'
        },
        {
            id: 27,
            question: '学员处于升舱期与到期之间的阶段称为？',
            options: [
                '首购期',
                '升舱期',
                '期间',
                '过期'
            ],
            correct: 2,
            explanation: '升舱期与到期之间的阶段称为期间。'
        },
        {
            id: 28,
            question: '当剩余课次小于4个月的课量时，学员被定义为？',
            options: [
                '升舱学员',
                '到期学员',
                '首购学员',
                '过期学员'
            ],
            correct: 1,
            explanation: '剩余课次小于4个月课量的学员被定义为到期学员。'
        },
        {
            id: 29,
            question: '港澳地区的到期标准是？',
            options: [
                '2个月课量',
                '3个月课量',
                '4个月课量',
                '6个月课量'
            ],
            correct: 2,
            explanation: '港澳地区的到期标准是4个月课量。'
        },
        {
            id: 30,
            question: '中东地区的到期标准是？',
            options: [
                '2个月课量',
                '3个月课量',
                '4个月课量',
                '6个月课量'
            ],
            correct: 0,
            explanation: '中东地区的到期标准是2个月课量。'
        },
        {
            id: 31,
            question: '学员在到期阶段可能的行为不包括？',
            options: [
                '续费',
                '转介绍',
                '投诉',
                '新购首单'
            ],
            correct: 3,
            explanation: '到期阶段的学员不会有新购首单的行为。'
        },
        {
            id: 32,
            question: '学员在生命周期中可能提出退费的时间点是？',
            options: [
                '首购期',
                '升舱期',
                '到期或期间',
                '任意阶段'
            ],
            correct: 3,
            explanation: '学员可能在任意阶段提出退费。'
        },
        {
            id: 33,
            question: '过期学员的定义是？',
            options: [
                '剩余课次大于12个月',
                '已经超过订单有效期',
                '已完成所有课程',
                '进入升级考试期'
            ],
            correct: 1,
            explanation: '过期学员是指已经超过订单有效期的学员。'
        },
        {
            id: 34,
            question: '学员生命周期中，SS重点负责的是？',
            options: [
                '课耗',
                '续费',
                '转介绍',
                '投诉'
            ],
            correct: 1,
            explanation: 'SS在学员生命周期中重点负责续费。'
        },
        {
            id: 35,
            question: '学员生命周期中，LP重点负责的是？',
            options: [
                '课耗',
                '续费',
                '产品研发',
                '招聘'
            ],
            correct: 0,
            explanation: 'LP在学员生命周期中重点负责课耗。'
        },
        {
            id: 36,
            question: '学员生命周期的五个阶段包括？',
            options: [
                '首购、升舱、期间、到期、过期',
                '试课、首购、升舱、续费、退费',
                '招生、续费、转介绍、投诉、退费',
                '注册、试听、付费、续费、流失'
            ],
            correct: 0,
            explanation: '学员生命周期包括首购、升舱、期间、到期、过期五个阶段。'
        },
        {
            id: 37,
            question: '学员购买首单后的第31天到报名月+2月的最后一天属于？',
            options: [
                '首购期',
                '升舱期',
                '到期阶段',
                '过期阶段'
            ],
            correct: 1,
            explanation: '这个时间段属于升舱期。'
        },
        {
            id: 38,
            question: '当学员课耗不足时，可能会影响进入哪个生命周期阶段？',
            options: [
                '升舱期',
                '期间',
                '到期',
                '过期'
            ],
            correct: 0,
            explanation: '课耗不足可能会影响学员进入升舱期。'
        },
        {
            id: 39,
            question: '学员生命周期划分的主要目的是什么？',
            options: [
                '优化财务核算',
                '提高学员满意度与续费率',
                '简化IT系统操作',
                '增加市场推广覆盖率'
            ],
            correct: 1,
            explanation: '学员生命周期划分的主要目的是提高学员满意度与续费率。'
        },
        {
            id: 40,
            question: '学员生命周期中，"禁渔"制度的核心目的是什么？',
            options: [
                '提高续费效率与体验',
                '延长学习周期',
                '增加退费率',
                '提高学员投诉率'
            ],
            correct: 0,
            explanation: '"禁渔"制度的核心目的是提高续费效率与体验。'
        },
        {
            id: 41,
            question: '学员生命周期中，谁更关注"课耗"？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: 'LP更关注课耗指标。'
        },
        {
            id: 42,
            question: '学员生命周期中，谁更关注"续费"？',
            options: [
                'SS',
                'LP',
                'SD',
                'Coach'
            ],
            correct: 0,
            explanation: 'SS更关注续费指标。'
        },
        {
            id: 43,
            question: 'SS/LP在生命周期管理中的共同目标是？',
            options: [
                '提高学员上课频率和续费率',
                '完成财务报表',
                '开发新课程',
                '招聘新员工'
            ],
            correct: 0,
            explanation: 'SS/LP的共同目标是提高学员上课频率和续费率。'
        },
        {
            id: 44,
            question: '若学员剩余课次 ≤ 60（按港澳15节×4个月），则属于？',
            options: [
                '首购期',
                '升舱期',
                '到期期',
                '过期期'
            ],
            correct: 2,
            explanation: '剩余课次≤60属于到期期。'
        },
        {
            id: 45,
            question: '学员生命周期中，哪一阶段是最容易进行转介绍？',
            options: [
                '首购期',
                '升舱期',
                '期间',
                '过期期'
            ],
            correct: 1,
            explanation: '升舱期是最容易进行转介绍的阶段。'
        },
        {
            id: 46,
            question: '"学员满意度和公司口碑提升"主要依靠谁的服务？',
            options: [
                'SS',
                'LP',
                'SM',
                'SD'
            ],
            correct: 1,
            explanation: '学员满意度和公司口碑提升主要依靠LP的服务。'
        },
        {
            id: 47,
            question: '新开业务中心在组织结构上有什么特点？',
            options: [
                '管辖幅宽更大',
                '管辖幅宽更灵活，可根据实际调整',
                '一律按成熟中心标准',
                '不设置TL'
            ],
            correct: 1,
            explanation: '新开业务中心的管辖幅宽更灵活，可根据实际情况调整。'
        },
        {
            id: 48,
            question: 'Coach与TL的主要区别是？',
            options: [
                'Coach有管理权，TL没有',
                'TL有管理权，Coach没有',
                '两者都没有管理权',
                '两者都只是新人'
            ],
            correct: 1,
            explanation: 'TL有管理权，而Coach没有管理权。'
        },
        {
            id: 49,
            question: 'SS/LP的成长过程中，从"信任建立"阶段到"快速成长"阶段的核心能力是？',
            options: [
                '独立思考与解决问题',
                '提炼方法并形成秘籍',
                '完成财务报表',
                '进行市场推广'
            ],
            correct: 1,
            explanation: '从信任建立到快速成长阶段的核心能力是提炼方法并形成秘籍。'
        },
        {
            id: 50,
            question: '学员生命周期划分中，"过期学员"对业务的最大风险是？',
            options: [
                '投诉增加',
                '续费率下降',
                '招聘难度提升',
                '财务成本上升'
            ],
            correct: 1,
            explanation: '过期学员对业务的最大风险是导致续费率下降。'
        }
    ],
    2: [
        {
            id: 1,
            question: '学员管理的核心目标是？',
            options: [
                '提高课耗和续费率',
                '提高退费率',
                '提高员工满意度',
                '提高招聘成功率'
            ],
            correct: 0,
            explanation: '学员管理的核心目标是提高课耗和续费率。'
        },
        {
            id: 2,
            question: '业务绩效的核心考核指标是？',
            options: [
                '招聘人数',
                '学员续费和课耗',
                '财务报表',
                '技术开发数量'
            ],
            correct: 1,
            explanation: '业务绩效的核心考核指标是学员续费和课耗。'
        },
        {
            id: 3,
            question: '学员管理中，SS重点关注的是？',
            options: [
                '课耗',
                '续费',
                '转介绍',
                '学情诊断'
            ],
            correct: 1,
            explanation: '学员管理中，SS重点关注续费。'
        },
        {
            id: 4,
            question: '学员管理中，LP重点关注的是？',
            options: [
                '续费',
                '转介绍',
                '高频上课与学习效果',
                '市场推广'
            ],
            correct: 2,
            explanation: '学员管理中，LP重点关注高频上课与学习效果。'
        },
        {
            id: 5,
            question: '产品规则中，"禁渔"的主要目的是什么？',
            options: [
                '限制学员购买次数',
                '提升学员体验和续费效率',
                '提高课程价格',
                '降低课耗'
            ],
            correct: 1,
            explanation: '产品规则中，"禁渔"的主要目的是提升学员体验和续费效率。'
        },
        {
            id: 6,
            question: '若被禁渔学员发生续费行为，该续费能否计入SS奖金？',
            options: [
                '可以',
                '不可以',
                '部分可以',
                '视情况而定'
            ],
            correct: 1,
            explanation: '被禁渔学员发生续费行为，该续费不可以计入SS奖金。'
        },
        {
            id: 7,
            question: '学员的生命周期与绩效考核之间的关系是？',
            options: [
                '没有关系',
                '生命周期影响续费和课耗，直接影响绩效',
                '生命周期只影响课耗，不影响绩效',
                '生命周期只影响投诉率'
            ],
            correct: 1,
            explanation: '学员的生命周期影响续费和课耗，直接影响绩效。'
        },
        {
            id: 8,
            question: '学员投诉主要影响哪一方面？',
            options: [
                '市场拓展',
                '服务口碑和续费率',
                '产品价格',
                '财务成本'
            ],
            correct: 1,
            explanation: '学员投诉主要影响服务口碑和续费率。'
        },
        {
            id: 9,
            question: '学员转介绍的好处是？',
            options: [
                '增加退费',
                '增加新学员与口碑效应',
                '减少上课频率',
                '增加投诉'
            ],
            correct: 1,
            explanation: '学员转介绍的好处是增加新学员与口碑效应。'
        },
        {
            id: 10,
            question: '产品规则的设计主要考虑什么？',
            options: [
                '成本、价值和合规性',
                '退费率',
                '招聘成功率',
                'IT开发速度'
            ],
            correct: 0,
            explanation: '产品规则的设计主要考虑成本、价值和合规性。'
        },
        {
            id: 11,
            question: '学员管理中的"覆盖率"是指？',
            options: [
                '联系到的学员占比',
                '续费学员占比',
                '投诉学员占比',
                '转介绍学员占比'
            ],
            correct: 0,
            explanation: '学员管理中的"覆盖率"是指联系到的学员占比。'
        },
        {
            id: 12,
            question: '学员服务节奏安排的目的是什么？',
            options: [
                '提高学员满意度与续费率',
                '提高IT系统稳定性',
                '提高财务准确率',
                '提高员工招聘成功率'
            ],
            correct: 0,
            explanation: '学员服务节奏安排的目的是提高学员满意度与续费率。'
        },
        {
            id: 13,
            question: '产品规则中对低消的要求主要是？',
            options: [
                '确保学员持续学习',
                '提高退费率',
                '降低客单价',
                '增加投诉'
            ],
            correct: 0,
            explanation: '产品规则中对低消的要求主要是确保学员持续学习。'
        },
        {
            id: 14,
            question: '学员生命周期划分主要是为了？',
            options: [
                '提高管理和运营效率',
                '降低财务成本',
                '提高招聘效率',
                '增加IT开发任务'
            ],
            correct: 0,
            explanation: '学员生命周期划分主要是为了提高管理和运营效率。'
        },
        {
            id: 15,
            question: '学员在生命周期中的核心行为不包括？',
            options: [
                '学习',
                '续费',
                '投诉',
                '招聘'
            ],
            correct: 3,
            explanation: '学员在生命周期中的核心行为不包括招聘。'
        },
        {
            id: 16,
            question: '业务绩效分析的三大要素是？',
            options: [
                '围场人数、转率、客单价',
                '招聘人数、财务报表、投诉率',
                '市场规模、课程价格、退费率',
                '员工流失率、培训次数、政策更新'
            ],
            correct: 0,
            explanation: '业务绩效分析的三大要素是围场人数、转率、客单价。'
        },
        {
            id: 17,
            question: '产品规则的合规性要求主要是？',
            options: [
                '符合法律法规',
                '提高投诉率',
                '降低续费率',
                '提高课耗压力'
            ],
            correct: 0,
            explanation: '产品规则的合规性要求主要是符合法律法规。'
        },
        {
            id: 18,
            question: '业务绩效中，"课耗"主要反映的是？',
            options: [
                '学员学习活跃度',
                '学员投诉率',
                '产品开发速度',
                '财务管理水平'
            ],
            correct: 0,
            explanation: '业务绩效中，"课耗"主要反映学员学习活跃度。'
        },
        {
            id: 19,
            question: '学员生命周期中，"到期"阶段的主要风险是？',
            options: [
                '投诉率下降',
                '续费流失',
                '招聘难度上升',
                '财务成本增加'
            ],
            correct: 1,
            explanation: '学员生命周期中，"到期"阶段的主要风险是续费流失。'
        },
        {
            id: 20,
            question: '学员管理与绩效考核的关系是？',
            options: [
                '学员管理的效果直接影响绩效达成',
                '学员管理与绩效无关',
                '学员管理只影响招聘',
                '学员管理只影响财务报表'
            ],
            correct: 0,
            explanation: '学员管理的效果直接影响绩效达成。'
        },
        {
            id: 21,
            question: '产品规则中，"低消"通常指？',
            options: [
                '每月最低课耗要求',
                '最低消费金额',
                '每月最低续费要求',
                '每月最低投诉数量'
            ],
            correct: 0,
            explanation: '产品规则中，"低消"通常指每月最低课耗要求。'
        },
        {
            id: 22,
            question: '学员管理中，谁负责学情诊断与总结？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: '学员管理中，LP负责学情诊断与总结。'
        },
        {
            id: 23,
            question: '学员管理的目标中，LP更关注哪一项？',
            options: [
                '投诉处理',
                '学习效果',
                '产品价格',
                '招聘计划'
            ],
            correct: 1,
            explanation: '学员管理的目标中，LP更关注学习效果。'
        },
        {
            id: 24,
            question: '学员转介绍的核心驱动力是？',
            options: [
                '产品价格高',
                '学习效果和服务满意度',
                '投诉处理快',
                '财务系统透明'
            ],
            correct: 1,
            explanation: '学员转介绍的核心驱动力是学习效果和服务满意度。'
        },
        {
            id: 25,
            question: '绩效考核中，SS的奖金主要与哪一项相关？',
            options: [
                '招聘',
                '续费',
                '课耗',
                '投诉'
            ],
            correct: 1,
            explanation: '绩效考核中，SS的奖金主要与续费相关。'
        },
        {
            id: 26,
            question: '产品规则的灵活性主要体现在？',
            options: [
                '根据市场反馈及时调整',
                '提高投诉率',
                '提高退费率',
                '增加课耗压力'
            ],
            correct: 0,
            explanation: '产品规则的灵活性主要体现在根据市场反馈及时调整。'
        },
        {
            id: 27,
            question: '学员生命周期管理的终极目标是？',
            options: [
                '提高公司口碑与业绩',
                '降低课耗',
                '增加退费',
                '减少招聘压力'
            ],
            correct: 0,
            explanation: '学员生命周期管理的终极目标是提高公司口碑与业绩。'
        },
        {
            id: 28,
            question: '学员服务过程中的SOP主要由谁负责执行？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: '学员服务过程中的SOP主要由LP负责执行。'
        },
        {
            id: 29,
            question: '学员生命周期中，谁更关注"到期"提醒？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 0,
            explanation: '学员生命周期中，SS更关注"到期"提醒。'
        },
        {
            id: 30,
            question: '学员生命周期中的"过期"主要指？',
            options: [
                '学员订单有效期已过',
                '学员转介绍失败',
                '学员未完成课耗',
                '学员投诉过多'
            ],
            correct: 0,
            explanation: '学员生命周期中的"过期"主要指学员订单有效期已过。'
        },
        {
            id: 31,
            question: '产品规则中的"合规性"主要是为了？',
            options: [
                '避免虚假宣传与不正当竞争',
                '提高投诉率',
                '增加退费',
                '降低续费'
            ],
            correct: 0,
            explanation: '产品规则中的"合规性"主要是为了避免虚假宣传与不正当竞争。'
        },
        {
            id: 32,
            question: '学员绩效考核中，"转率"是指？',
            options: [
                '成交转化率',
                '投诉率',
                '招聘成功率',
                '产品退费率'
            ],
            correct: 0,
            explanation: '学员绩效考核中，"转率"是指成交转化率。'
        },
        {
            id: 33,
            question: '产品规则的"成本效益"主要要求？',
            options: [
                '投入产出比合理',
                '提高退费率',
                '降低投诉率',
                '增加招聘人数'
            ],
            correct: 0,
            explanation: '产品规则的"成本效益"主要要求投入产出比合理。'
        },
        {
            id: 34,
            question: '学员服务节奏中，"预习和复习"由谁主要负责？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: '学员服务节奏中，"预习和复习"由LP主要负责。'
        },
        {
            id: 35,
            question: '学员生命周期的"首购"阶段，SS重点做什么？',
            options: [
                '完成续费',
                '完成首单解读与学习规划',
                '完成投诉处理',
                '完成财务结算'
            ],
            correct: 1,
            explanation: '学员生命周期的"首购"阶段，SS重点完成首单解读与学习规划。'
        },
        {
            id: 36,
            question: '学员生命周期中的"升舱"阶段，主要目标是？',
            options: [
                '拉动课耗与续费',
                '投诉处理',
                '降低课耗',
                '提高退费率'
            ],
            correct: 0,
            explanation: '学员生命周期中的"升舱"阶段，主要目标是拉动课耗与续费。'
        },
        {
            id: 37,
            question: '产品规则的"时效性"要求促销活动应当？',
            options: [
                '有明确时间限制，营造紧迫感',
                '提高投诉率',
                '提高退费率',
                '增加课程难度'
            ],
            correct: 0,
            explanation: '产品规则的"时效性"要求促销活动应当有明确时间限制，营造紧迫感。'
        },
        {
            id: 38,
            question: '学员生命周期中，谁主要负责"到期续费"？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 0,
            explanation: '学员生命周期中，SS主要负责"到期续费"。'
        },
        {
            id: 39,
            question: '学员管理的最终衡量标准是？',
            options: [
                '学员满意度和续费率',
                '投诉数量',
                '财务报表',
                '招聘率'
            ],
            correct: 0,
            explanation: '学员管理的最终衡量标准是学员满意度和续费率。'
        },
        {
            id: 40,
            question: '学员服务节奏中，LP的重点之一是？',
            options: [
                '课前预习与课后复习指导',
                '投诉处理',
                '财务结算',
                '招聘计划'
            ],
            correct: 0,
            explanation: '学员服务节奏中，LP的重点之一是课前预习与课后复习指导。'
        },
        {
            id: 41,
            question: '产品规则中的"客户价值"要求是什么？',
            options: [
                '提供真实价值，而非单纯降价',
                '提高退费率',
                '提高投诉率',
                '降低续费率'
            ],
            correct: 0,
            explanation: '产品规则中的"客户价值"要求是提供真实价值，而非单纯降价。'
        },
        {
            id: 42,
            question: '学员生命周期中，转介绍通常发生在哪些阶段？',
            options: [
                '升舱期和期间',
                '过期阶段',
                '到期阶段',
                '投诉阶段'
            ],
            correct: 0,
            explanation: '学员生命周期中，转介绍通常发生在升舱期和期间。'
        },
        {
            id: 43,
            question: '产品规则的"创新性"体现在？',
            options: [
                '使用新颖的促销方式',
                '提高退费率',
                '增加投诉',
                '降低续费率'
            ],
            correct: 0,
            explanation: '产品规则的"创新性"体现在使用新颖的促销方式。'
        },
        {
            id: 44,
            question: '学员生命周期管理中，服务SOP的重要性在于？',
            options: [
                '保证服务一致性和标准化',
                '提高投诉率',
                '增加退费',
                '提高招聘难度'
            ],
            correct: 0,
            explanation: '学员生命周期管理中，服务SOP的重要性在于保证服务一致性和标准化。'
        },
        {
            id: 45,
            question: '学员生命周期中，过期学员的主要风险是？',
            options: [
                '续费流失',
                '投诉增加',
                '招聘难度提升',
                '财务成本增加'
            ],
            correct: 0,
            explanation: '学员生命周期中，过期学员的主要风险是续费流失。'
        },
        {
            id: 46,
            question: '学员管理中，"主动服务"主要由谁负责？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: '学员管理中，"主动服务"主要由LP负责。'
        },
        {
            id: 47,
            question: '产品规则中的"可衡量性"主要体现为？',
            options: [
                '有明确评估指标（如ROI）',
                '提高退费率',
                '提高投诉率',
                '降低课耗'
            ],
            correct: 0,
            explanation: '产品规则中的"可衡量性"主要体现为有明确评估指标（如ROI）。'
        },
        {
            id: 48,
            question: '学员生命周期管理的作用是？',
            options: [
                '帮助SS和LP更精准把握学员需求',
                '增加投诉',
                '降低续费率',
                '提高退费率'
            ],
            correct: 0,
            explanation: '学员生命周期管理的作用是帮助SS和LP更精准把握学员需求。'
        },
        {
            id: 49,
            question: '学员管理中，谁主要负责转介绍？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 1,
            explanation: '学员管理中，LP主要负责转介绍。'
        },
        {
            id: 50,
            question: '产品规则中，"一致性"要求促销活动应当？',
            options: [
                '与品牌形象和价值观一致',
                '提高投诉率',
                '增加退费率',
                '降低续费率'
            ],
            correct: 0,
            explanation: '产品规则中，"一致性"要求促销活动应当与品牌形象和价值观一致。'
        }
    ],
    3: [
        {
            id: 1,
            question: '下标逻辑主要用于什么？',
            options: [
                '财务核算',
                '学员分层和续费管理',
                '招聘评估',
                '市场推广'
            ],
            correct: 1,
            explanation: '下标逻辑主要用于学员分层和续费管理。'
        },
        {
            id: 2,
            question: '港澳地区"首月升舱"逻辑要求学员付费后多少天以上才可进入围场？',
            options: [
                '7天',
                '15天',
                '30天',
                '60天'
            ],
            correct: 2,
            explanation: '港澳地区"首月升舱"逻辑要求学员付费后30天以上才可进入围场。'
        },
        {
            id: 3,
            question: '港澳"首月升舱"逻辑中，无低消要求的用户按多少课次计算？',
            options: [
                '6节',
                '8节',
                '10节',
                '12节'
            ],
            correct: 3,
            explanation: '港澳"首月升舱"逻辑中，无低消要求的用户按12节计算。'
        },
        {
            id: 4,
            question: '港澳"次月升舱"逻辑中，学员需在付费月的下一个自然月完成低消才进入围场。此规则的锁定时间是？',
            options: [
                '每日滚动',
                '月初锁定',
                '季度末锁定',
                '每周锁定'
            ],
            correct: 1,
            explanation: '港澳"次月升舱"逻辑的锁定时间是月初锁定。'
        },
        {
            id: 5,
            question: '港澳"期间围场"逻辑要求学员剩余次卡量 ≤ 多少个月课量？',
            options: [
                '8个月',
                '12个月',
                '14个月',
                '16个月'
            ],
            correct: 2,
            explanation: '港澳"期间围场"逻辑要求学员剩余次卡量 ≤ 14个月课量。'
        },
        {
            id: 6,
            question: '港澳"期间围场"逻辑中，低消为15节的学员，平均课耗要求是多少节？',
            options: [
                '6节',
                '7节',
                '8节',
                '10节'
            ],
            correct: 3,
            explanation: '港澳"期间围场"逻辑中，低消为15节的学员，平均课耗要求是10节。'
        },
        {
            id: 7,
            question: '港澳"到期围场"逻辑要求学员剩余次卡量少于多少个月课量？',
            options: [
                '2个月',
                '3个月',
                '4个月',
                '6个月'
            ],
            correct: 2,
            explanation: '港澳"到期围场"逻辑要求学员剩余次卡量少于4个月课量。'
        },
        {
            id: 8,
            question: '泰国"首月升舱"逻辑中，首单金额需小于多少美金？',
            options: [
                '200美金',
                '300美金',
                '400美金',
                '500美金'
            ],
            correct: 2,
            explanation: '泰国"首月升舱"逻辑中，首单金额需小于400美金。'
        },
        {
            id: 9,
            question: '泰国"首月升舱"逻辑中，无低消学员按多少节计算？',
            options: [
                '6节',
                '8节',
                '10节',
                '12节'
            ],
            correct: 1,
            explanation: '泰国"首月升舱"逻辑中，无低消学员按8节计算。'
        },
        {
            id: 10,
            question: '泰国"期间围场"逻辑中，学员剩余次卡量 ≤ 多少个月课量？',
            options: [
                '8个月',
                '10个月',
                '12个月',
                '14个月'
            ],
            correct: 3,
            explanation: '泰国"期间围场"逻辑中，学员剩余次卡量 ≤ 14个月课量。'
        },
        {
            id: 11,
            question: '泰国"期间围场"逻辑中，低消为12节的学员，平均课耗要求是多少节？',
            options: [
                '6节',
                '7节',
                '8节',
                '10节'
            ],
            correct: 2,
            explanation: '泰国"期间围场"逻辑中，低消为12节的学员，平均课耗要求是8节。'
        },
        {
            id: 12,
            question: '港澳和泰国"首单到期围场"的共同要求是？',
            options: [
                '到期时间在本月及之后3个月',
                '首单金额小于200美金',
                '课耗≥15节',
                '投诉次数≤2次'
            ],
            correct: 0,
            explanation: '港澳和泰国"首单到期围场"的共同要求是到期时间在本月及之后3个月。'
        },
        {
            id: 13,
            question: '下标逻辑确认时间是每月何时？',
            options: [
                '月初第一周',
                '月底最后一周',
                '每季度末',
                '半年度总结时'
            ],
            correct: 1,
            explanation: '下标逻辑确认时间是每月月底最后一周。'
        },
        {
            id: 14,
            question: '下标逻辑需求提出时间为？',
            options: [
                '本月第一周',
                '本月最后一周（不含最后3天）',
                '季度末',
                '任意时段'
            ],
            correct: 1,
            explanation: '下标逻辑需求提出时间为本月最后一周（不含最后3天）。'
        },
        {
            id: 15,
            question: '围场需求的对接人通常是？',
            options: [
                '财务',
                '大数据团队',
                '市场部',
                '人力资源部'
            ],
            correct: 1,
            explanation: '围场需求的对接人通常是大数据团队。'
        },
        {
            id: 16,
            question: '下标逻辑上线时间为每月？',
            options: [
                '1号修改逻辑，2号上线',
                '5号修改逻辑，6号上线',
                '10号统一上线',
                '15号统一上线'
            ],
            correct: 0,
            explanation: '下标逻辑上线时间为每月1号修改逻辑，2号上线。'
        },
        {
            id: 17,
            question: '围场上线后，区域运营需做什么？',
            options: [
                '修改规则',
                '数据核验',
                '重新分层',
                '调整产品价格'
            ],
            correct: 1,
            explanation: '围场上线后，区域运营需做数据核验。'
        },
        {
            id: 18,
            question: '数据核验的重点是？',
            options: [
                '学员的首单时间、课耗等是否与规则一致',
                '投诉率是否下降',
                '财务是否平衡',
                '招聘人数是否达标'
            ],
            correct: 0,
            explanation: '数据核验的重点是学员的首单时间、课耗等是否与规则一致。'
        },
        {
            id: 19,
            question: '围场外业绩监控的频率是？',
            options: [
                '每日',
                '每周',
                '每季度',
                '每半年'
            ],
            correct: 1,
            explanation: '围场外业绩监控的频率是每周。'
        },
        {
            id: 20,
            question: '超出特批名额的订单会如何处理？',
            options: [
                '正常计入业绩',
                '由总部剔除业绩',
                '顺延到下月',
                '转入期间围场'
            ],
            correct: 1,
            explanation: '超出特批名额的订单会由总部剔除业绩。'
        },
        {
            id: 21,
            question: '下标逻辑中的"首单为中文，第二单为英文"的情况如何记录？',
            options: [
                '中文首单',
                '英文首单',
                '双语首单',
                '取消记录'
            ],
            correct: 1,
            explanation: '下标逻辑中的"首单为中文，第二单为英文"的情况记录为英文首单。'
        },
        {
            id: 22,
            question: '港澳"期间围场"不包含哪些学员？',
            options: [
                '前1个月新购',
                '前2个月新购',
                '前3个月新购',
                '前4个月新购'
            ],
            correct: 1,
            explanation: '港澳"期间围场"不包含前2个月新购的学员。'
        },
        {
            id: 23,
            question: '泰国"期间围场"中，学员期间段必须是？',
            options: [
                'P1',
                'P2',
                'P3',
                'P4'
            ],
            correct: 0,
            explanation: '泰国"期间围场"中，学员期间段必须是P1。'
        },
        {
            id: 24,
            question: '学员进入围场的逻辑由谁最终确认？',
            options: [
                '中台和区域运营Head/GM',
                '财务部',
                '人力资源部',
                '市场推广部'
            ],
            correct: 0,
            explanation: '学员进入围场的逻辑由中台和区域运营Head/GM最终确认。'
        },
        {
            id: 25,
            question: '下标逻辑的主要作用是？',
            options: [
                '帮助SS精准管理续费对象',
                '降低投诉率',
                '提高财务准确性',
                '减少市场开支'
            ],
            correct: 0,
            explanation: '下标逻辑的主要作用是帮助SS精准管理续费对象。'
        },
        {
            id: 26,
            question: '学员权益的定义是？',
            options: [
                '学员购买课程后享有的学习与服务权利',
                '学员的法律义务',
                '学员的投诉渠道',
                '学员的财务支付方式'
            ],
            correct: 0,
            explanation: '学员权益的定义是学员购买课程后享有的学习与服务权利。'
        },
        {
            id: 27,
            question: '学员权益的核心不包括以下哪项？',
            options: [
                '课程学习权利',
                '客服答疑权利',
                '财务核算权利',
                '续费选择权利'
            ],
            correct: 2,
            explanation: '学员权益的核心不包括财务核算权利。'
        },
        {
            id: 28,
            question: '学员在"首购期"最重要的权益是？',
            options: [
                '投诉处理权利',
                '退费权利',
                '完成学习规划与课程体验',
                '招聘权利'
            ],
            correct: 2,
            explanation: '学员在"首购期"最重要的权益是完成学习规划与课程体验。'
        },
        {
            id: 29,
            question: '学员在"升舱期"主要享有的权益是？',
            options: [
                '参加促销活动',
                '获得更多课程资源',
                '转介绍奖励',
                '以上皆是'
            ],
            correct: 3,
            explanation: '学员在"升舱期"主要享有的权益是以上皆是。'
        },
        {
            id: 30,
            question: '学员权益管理的核心目标是？',
            options: [
                '提升学员满意度和续费率',
                '提高财务核算准确度',
                '增加招聘效率',
                '提升IT系统稳定性'
            ],
            correct: 0,
            explanation: '学员权益管理的核心目标是提升学员满意度和续费率。'
        },
        {
            id: 31,
            question: '学员投诉属于哪类权益问题？',
            options: [
                '法律问题',
                '服务问题',
                '财务问题',
                '产品研发问题'
            ],
            correct: 1,
            explanation: '学员投诉属于服务问题。'
        },
        {
            id: 32,
            question: '学员权益保护的根本目的是？',
            options: [
                '提升企业口碑和长期业绩',
                '提高退费率',
                '增加投诉',
                '提升课耗压力'
            ],
            correct: 0,
            explanation: '学员权益保护的根本目的是提升企业口碑和长期业绩。'
        },
        {
            id: 33,
            question: '在生命周期中，学员可享有的基本权益不包括？',
            options: [
                '上课权利',
                '续费权利',
                '转介绍权利',
                '招聘权利'
            ],
            correct: 3,
            explanation: '在生命周期中，学员可享有的基本权益不包括招聘权利。'
        },
        {
            id: 34,
            question: '学员权益保障措施包括？',
            options: [
                '明确的SOP服务流程',
                '合规的产品规则',
                '有效的投诉处理机制',
                '以上皆是'
            ],
            correct: 3,
            explanation: '学员权益保障措施包括以上皆是。'
        },
        {
            id: 35,
            question: '学员权益与下标逻辑的关系是？',
            options: [
                '下标逻辑划定可享受续费权益的学员群体',
                '下标逻辑只影响财务',
                '下标逻辑只影响招聘',
                '两者没有关系'
            ],
            correct: 0,
            explanation: '学员权益与下标逻辑的关系是下标逻辑划定可享受续费权益的学员群体。'
        },
        {
            id: 36,
            question: '学员权益中的"转介绍奖励"体现了哪种价值？',
            options: [
                '客户价值',
                '财务价值',
                '招聘价值',
                'IT价值'
            ],
            correct: 0,
            explanation: '学员权益中的"转介绍奖励"体现了客户价值。'
        },
        {
            id: 37,
            question: '在到期阶段，学员的主要权益是？',
            options: [
                '退费与续费选择',
                '投诉权利',
                '招聘参与权',
                '财务核算权'
            ],
            correct: 0,
            explanation: '在到期阶段，学员的主要权益是退费与续费选择。'
        },
        {
            id: 38,
            question: '学员权益保护的法律意义是？',
            options: [
                '遵守消费者保护法',
                '增加退费',
                '提高投诉率',
                '降低续费率'
            ],
            correct: 0,
            explanation: '学员权益保护的法律意义是遵守消费者保护法。'
        },
        {
            id: 39,
            question: '在学员权益管理中，LP重点关注哪一项？',
            options: [
                '课耗权益',
                '财务权益',
                '招聘权益',
                'IT权益'
            ],
            correct: 0,
            explanation: '在学员权益管理中，LP重点关注课耗权益。'
        },
        {
            id: 40,
            question: '在学员权益管理中，SS重点关注哪一项？',
            options: [
                '续费权益',
                '财务权益',
                '招聘权益',
                'IT权益'
            ],
            correct: 0,
            explanation: '在学员权益管理中，SS重点关注续费权益。'
        },
        {
            id: 41,
            question: '学员权益中，"退费"属于哪类权利？',
            options: [
                '消费者合法权益',
                '招聘权利',
                '财务投资权利',
                '市场营销权利'
            ],
            correct: 0,
            explanation: '学员权益中，"退费"属于消费者合法权益。'
        },
        {
            id: 42,
            question: '学员权益中，"投诉处理"应当由谁负责？',
            options: [
                '客服、SS、LP共同',
                '财务',
                '招聘部门',
                'IT部门'
            ],
            correct: 0,
            explanation: '学员权益中，"投诉处理"应当由客服、SS、LP共同负责。'
        },
        {
            id: 43,
            question: '学员权益的最终目标是？',
            options: [
                '学员满意度与企业口碑提升',
                '财务报表准确性',
                '招聘达成率',
                'IT系统稳定性'
            ],
            correct: 0,
            explanation: '学员权益的最终目标是学员满意度与企业口碑提升。'
        },
        {
            id: 44,
            question: '学员权益保护中，促销活动需要遵循什么？',
            options: [
                '合规性和真实价值',
                '提高退费率',
                '增加投诉',
                '提高课耗压力'
            ],
            correct: 0,
            explanation: '学员权益保护中，促销活动需要遵循合规性和真实价值。'
        },
        {
            id: 45,
            question: '学员权益和产品规则的关系是？',
            options: [
                '产品规则必须保障学员权益',
                '产品规则只关注财务',
                '产品规则只关注招聘',
                '两者无关'
            ],
            correct: 0,
            explanation: '学员权益和产品规则的关系是产品规则必须保障学员权益。'
        },
        {
            id: 46,
            question: '学员权益保护的措施中，最能直接影响续费率的是？',
            options: [
                '服务满意度提升',
                '财务系统改进',
                '招聘流程优化',
                'IT功能优化'
            ],
            correct: 0,
            explanation: '学员权益保护的措施中，最能直接影响续费率的是服务满意度提升。'
        },
        {
            id: 47,
            question: '学员权益在生命周期管理中的作用是？',
            options: [
                '保证学员在各阶段获得应有的学习与服务',
                '增加投诉',
                '提高退费',
                '减少续费'
            ],
            correct: 0,
            explanation: '学员权益在生命周期管理中的作用是保证学员在各阶段获得应有的学习与服务。'
        },
        {
            id: 48,
            question: '学员权益和企业绩效的关系是？',
            options: [
                '权益保障越完善，绩效达成率越高',
                '权益保障降低绩效',
                '权益保障只影响招聘',
                '权益保障只影响财务'
            ],
            correct: 0,
            explanation: '学员权益和企业绩效的关系是权益保障越完善，绩效达成率越高。'
        },
        {
            id: 49,
            question: '学员权益保护的难点在于？',
            options: [
                '如何平衡学员体验与公司利润',
                '如何提高退费率',
                '如何增加投诉率',
                '如何降低续费率'
            ],
            correct: 0,
            explanation: '学员权益保护的难点在于如何平衡学员体验与公司利润。'
        },
        {
            id: 50,
            question: '下标逻辑与学员权益共同的最终目标是？',
            options: [
                '提高续费率与客户满意度',
                '提高退费率',
                '增加投诉',
                '提高财务负担'
            ],
            correct: 0,
            explanation: '下标逻辑与学员权益共同的最终目标是提高续费率与客户满意度。'
        }
    ],
    4: [
        {
            id: 1,
            question: 'SS/LP运营定位的核心是什么？',
            options: [
                '提升课耗和续费率',
                '招聘更多员工',
                '完成财务报表',
                '开发新课程'
            ],
            correct: 0,
            explanation: 'SS/LP运营定位的核心是提升课耗和续费率。'
        },
        {
            id: 2,
            question: 'SS的核心运营定位是？',
            options: [
                '提高续费率',
                '提高投诉率',
                '提高招聘效率',
                '提高退费率'
            ],
            correct: 0,
            explanation: 'SS的核心运营定位是提高续费率。'
        },
        {
            id: 3,
            question: 'LP的核心运营定位是？',
            options: [
                '提高学员课耗与学习效果',
                '提高财务准确性',
                '提高招聘效率',
                '提高退费率'
            ],
            correct: 0,
            explanation: 'LP的核心运营定位是提高学员课耗与学习效果。'
        },
        {
            id: 4,
            question: '围场运营的核心作用是？',
            options: [
                '提高学员生命周期内的转化率',
                '提高投诉率',
                '提高退费率',
                '降低财务风险'
            ],
            correct: 0,
            explanation: '围场运营的核心作用是提高学员生命周期内的转化率。'
        },
        {
            id: 5,
            question: '区域运营的定位是？',
            options: [
                '支撑一线业务，制定落地策略',
                '独立开发新课程',
                '进行财务管理',
                '完成人员招聘'
            ],
            correct: 0,
            explanation: '区域运营的定位是支撑一线业务，制定落地策略。'
        },
        {
            id: 6,
            question: '中台运营的定位是？',
            options: [
                '制定统一规则，保障业务运行',
                '招聘和培训新人',
                '处理财务报表',
                '完成学员投诉处理'
            ],
            correct: 0,
            explanation: '中台运营的定位是制定统一规则，保障业务运行。'
        },
        {
            id: 7,
            question: '区域运营和中台运营的关系是？',
            options: [
                '协同配合，区域负责执行，中台负责规则',
                '区域独立，中台监督',
                '中台执行，区域不参与',
                '两者没有关系'
            ],
            correct: 0,
            explanation: '区域运营和中台运营的关系是协同配合，区域负责执行，中台负责规则。'
        },
        {
            id: 8,
            question: '运营定位的最终目标是？',
            options: [
                '提升学员满意度和公司业绩',
                '提高退费率',
                '提高投诉率',
                '提高财务负担'
            ],
            correct: 0,
            explanation: '运营定位的最终目标是提升学员满意度和公司业绩。'
        },
        {
            id: 9,
            question: '在SS/LP体系中，"拉动续费"的定位主要由谁负责？',
            options: [
                'SS',
                'LP',
                'SM',
                'Coach'
            ],
            correct: 0,
            explanation: '在SS/LP体系中，"拉动续费"的定位主要由SS负责。'
        },
        {
            id: 10,
            question: '在SS/LP体系中，"保障课耗"的定位主要由谁负责？',
            options: [
                'SS',
                'LP',
                'SD',
                'Coach'
            ],
            correct: 1,
            explanation: '在SS/LP体系中，"保障课耗"的定位主要由LP负责。'
        },
        {
            id: 11,
            question: '区域运营关注的核心指标是？',
            options: [
                '课耗、续费、转介绍',
                '招聘人数、培训次数',
                '投诉数量、退费率',
                '财务报表、利润率'
            ],
            correct: 0,
            explanation: '区域运营关注的核心指标是课耗、续费、转介绍。'
        },
        {
            id: 12,
            question: '运营定位中的"分工明确"体现为？',
            options: [
                'SS负责业绩，LP负责服务',
                'SS负责财务，LP负责招聘',
                'SS负责招聘，LP负责培训',
                'SS负责投诉，LP负责财务'
            ],
            correct: 0,
            explanation: '运营定位中的"分工明确"体现为SS负责业绩，LP负责服务。'
        },
        {
            id: 13,
            question: '运营定位对学员生命周期的意义是？',
            options: [
                '确保不同阶段学员有对应负责人',
                '增加投诉',
                '提高退费',
                '减少续费'
            ],
            correct: 0,
            explanation: '运营定位对学员生命周期的意义是确保不同阶段学员有对应负责人。'
        },
        {
            id: 14,
            question: '中台运营的主要工作成果是？',
            options: [
                '规则和SOP的制定',
                '招聘计划',
                '财务结算',
                '投诉处理'
            ],
            correct: 0,
            explanation: '中台运营的主要工作成果是规则和SOP的制定。'
        },
        {
            id: 15,
            question: '区域运营在执行中的关键能力是？',
            options: [
                '数据分析与落地执行',
                '财务结算',
                '招聘评估',
                'IT开发'
            ],
            correct: 0,
            explanation: '区域运营在执行中的关键能力是数据分析与落地执行。'
        },
        {
            id: 16,
            question: '运营定位的价值在于？',
            options: [
                '提高整体效率和业绩结果',
                '提高退费率',
                '提高投诉率',
                '提高成本'
            ],
            correct: 0,
            explanation: '运营定位的价值在于提高整体效率和业绩结果。'
        },
        {
            id: 17,
            question: '围场运营的最终目标是？',
            options: [
                '提高续费率与课耗',
                '提高退费率',
                '提高投诉率',
                '提高招聘率'
            ],
            correct: 0,
            explanation: '围场运营的最终目标是提高续费率与课耗。'
        },
        {
            id: 18,
            question: '区域运营的支持范围是？',
            options: [
                '一线SS/LP业务',
                '财务核算',
                'IT开发',
                '招聘流程'
            ],
            correct: 0,
            explanation: '区域运营的支持范围是一线SS/LP业务。'
        },
        {
            id: 19,
            question: '中台运营的支持对象是？',
            options: [
                '区域与前线业务',
                '财务部门',
                '招聘部门',
                '市场推广'
            ],
            correct: 0,
            explanation: '中台运营的支持对象是区域与前线业务。'
        },
        {
            id: 20,
            question: '运营定位的分层逻辑是？',
            options: [
                '前线—区域—中台三级协同',
                '前线—财务—市场三级',
                '财务—人力—研发三级',
                '市场—招聘—财务三级'
            ],
            correct: 0,
            explanation: '运营定位的分层逻辑是前线—区域—中台三级协同。'
        },
        {
            id: 21,
            question: '目标拆解的核心原则是？',
            options: [
                '总目标可量化、可分解',
                '提高投诉率',
                '提高退费率',
                '提高招聘率'
            ],
            correct: 0,
            explanation: '目标拆解的核心原则是总目标可量化、可分解。'
        },
        {
            id: 22,
            question: '围场运营的目标拆解通常包括？',
            options: [
                '围场人数、转率、客单价',
                '投诉数量、退费金额、招聘人数',
                'IT开发、财务结算、市场推广',
                '招聘评估、财务报表、合规性'
            ],
            correct: 0,
            explanation: '围场运营的目标拆解通常包括围场人数、转率、客单价。'
        },
        {
            id: 23,
            question: '目标拆解的时间维度通常是？',
            options: [
                '月、周、日',
                '季度、半年、全年',
                '任意维度',
                '仅限年度'
            ],
            correct: 0,
            explanation: '目标拆解的时间维度通常是月、周、日。'
        },
        {
            id: 24,
            question: '围场目标拆解中，最直接影响业绩的指标是？',
            options: [
                '转率',
                '投诉率',
                '招聘率',
                '财务准确率'
            ],
            correct: 0,
            explanation: '围场目标拆解中，最直接影响业绩的指标是转率。'
        },
        {
            id: 25,
            question: '目标拆解的目的是什么？',
            options: [
                '保证目标逐级落实到个人',
                '提高投诉率',
                '增加退费',
                '降低课耗'
            ],
            correct: 0,
            explanation: '目标拆解的目的是保证目标逐级落实到个人。'
        },
        {
            id: 26,
            question: 'SS的目标拆解主要围绕？',
            options: [
                '续费率',
                '课耗率',
                '投诉率',
                '招聘率'
            ],
            correct: 0,
            explanation: 'SS的目标拆解主要围绕续费率。'
        },
        {
            id: 27,
            question: 'LP的目标拆解主要围绕？',
            options: [
                '课耗率',
                '续费率',
                '招聘率',
                '财务准确率'
            ],
            correct: 0,
            explanation: 'LP的目标拆解主要围绕课耗率。'
        },
        {
            id: 28,
            question: '围场运营中，目标拆解需要结合？',
            options: [
                '学员生命周期',
                '财务结算',
                '招聘计划',
                'IT开发进度'
            ],
            correct: 0,
            explanation: '围场运营中，目标拆解需要结合学员生命周期。'
        },
        {
            id: 29,
            question: 'SM在目标拆解中负责？',
            options: [
                '分解并监督团队目标达成',
                '财务结算',
                '招聘',
                '投诉处理'
            ],
            correct: 0,
            explanation: 'SM在目标拆解中负责分解并监督团队目标达成。'
        },
        {
            id: 30,
            question: '目标拆解的结果应符合？',
            options: [
                'SMART原则',
                '招聘原则',
                '财务原则',
                '市场原则'
            ],
            correct: 0,
            explanation: '目标拆解的结果应符合SMART原则。'
        },
        {
            id: 31,
            question: '目标拆解常用的工具是？',
            options: [
                '数据看板和报表',
                '财务系统',
                '招聘系统',
                '市场宣传资料'
            ],
            correct: 0,
            explanation: '目标拆解常用的工具是数据看板和报表。'
        },
        {
            id: 32,
            question: '围场运营目标拆解中的"人数"指？',
            options: [
                '有效围场学员数量',
                '招聘人数',
                '投诉人数',
                '财务人数'
            ],
            correct: 0,
            explanation: '围场运营目标拆解中的"人数"指有效围场学员数量。'
        },
        {
            id: 33,
            question: '围场运营目标拆解中的"客单价"指？',
            options: [
                '学员单次续费金额',
                '招聘成本',
                '投诉金额',
                '财务结算金额'
            ],
            correct: 0,
            explanation: '围场运营目标拆解中的"客单价"指学员单次续费金额。'
        },
        {
            id: 34,
            question: '围场运营目标拆解的意义是？',
            options: [
                '帮助明确责任，提升执行效率',
                '提高退费率',
                '提高投诉率',
                '提高招聘率'
            ],
            correct: 0,
            explanation: '围场运营目标拆解的意义是帮助明确责任，提升执行效率。'
        },
        {
            id: 35,
            question: '围场运营拆解的最终落脚点是？',
            options: [
                '每一位SS/LP的个人目标',
                '财务结算',
                '招聘人数',
                'IT系统开发'
            ],
            correct: 0,
            explanation: '围场运营拆解的最终落脚点是每一位SS/LP的个人目标。'
        },
        {
            id: 36,
            question: '围场运营的定义是？',
            options: [
                '针对不同生命周期阶段的学员进行集中管理和转化',
                '财务核算过程',
                '招聘过程',
                '投诉处理过程'
            ],
            correct: 0,
            explanation: '围场运营的定义是针对不同生命周期阶段的学员进行集中管理和转化。'
        },
        {
            id: 37,
            question: '围场运营的三大核心要素是？',
            options: [
                '人数、转率、客单价',
                '财务、招聘、培训',
                '投诉、退费、合规',
                '市场、推广、研发'
            ],
            correct: 0,
            explanation: '围场运营的三大核心要素是人数、转率、客单价。'
        },
        {
            id: 38,
            question: '围场运营的核心周期是？',
            options: [
                '月度',
                '季度',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '围场运营的核心周期是月度。'
        },
        {
            id: 39,
            question: '围场运营对SS的意义是？',
            options: [
                '提供明确的续费对象',
                '提高财务准确性',
                '提高招聘效率',
                '降低投诉'
            ],
            correct: 0,
            explanation: '围场运营对SS的意义是提供明确的续费对象。'
        },
        {
            id: 40,
            question: '围场运营对LP的意义是？',
            options: [
                '提供明确的服务节奏和课耗方向',
                '提高财务准确性',
                '提高招聘效率',
                '增加退费'
            ],
            correct: 0,
            explanation: '围场运营对LP的意义是提供明确的服务节奏和课耗方向。'
        },
        {
            id: 41,
            question: '围场运营效果好坏直接影响？',
            options: [
                '业绩目标达成',
                '财务报表准确性',
                '招聘完成率',
                '投诉率'
            ],
            correct: 0,
            explanation: '围场运营效果好坏直接影响业绩目标达成。'
        },
        {
            id: 42,
            question: '围场运营的主要落地执行人是？',
            options: [
                '区域运营',
                '中台',
                '财务',
                '人力'
            ],
            correct: 0,
            explanation: '围场运营的主要落地执行人是区域运营。'
        },
        {
            id: 43,
            question: '围场运营中，中台的作用是？',
            options: [
                '制定规则和逻辑',
                '执行服务',
                '招聘新人',
                '财务结算'
            ],
            correct: 0,
            explanation: '围场运营中，中台的作用是制定规则和逻辑。'
        },
        {
            id: 44,
            question: '围场运营中，区域运营的作用是？',
            options: [
                '数据分析与落地执行',
                '财务管理',
                '招聘',
                'IT开发'
            ],
            correct: 0,
            explanation: '围场运营中，区域运营的作用是数据分析与落地执行。'
        },
        {
            id: 45,
            question: '围场运营常用的监控工具是？',
            options: [
                '数据看板',
                '财务系统',
                '招聘系统',
                '市场工具'
            ],
            correct: 0,
            explanation: '围场运营常用的监控工具是数据看板。'
        },
        {
            id: 46,
            question: '围场运营的最终目标是？',
            options: [
                '提高续费率和课耗率',
                '提高投诉率',
                '提高退费率',
                '提高招聘率'
            ],
            correct: 0,
            explanation: '围场运营的最终目标是提高续费率和课耗率。'
        },
        {
            id: 47,
            question: '围场运营的难点在于？',
            options: [
                '学员分层与精准匹配',
                '财务结算',
                '招聘难度',
                '投诉处理'
            ],
            correct: 0,
            explanation: '围场运营的难点在于学员分层与精准匹配。'
        },
        {
            id: 48,
            question: '围场运营的成功关键是？',
            options: [
                '规则清晰、执行到位、监控及时',
                '提高投诉率',
                '提高退费率',
                '增加财务负担'
            ],
            correct: 0,
            explanation: '围场运营的成功关键是规则清晰、执行到位、监控及时。'
        },
        {
            id: 49,
            question: '围场运营的月度复盘作用是？',
            options: [
                '总结问题，优化策略',
                '提高投诉',
                '提高退费',
                '降低续费'
            ],
            correct: 0,
            explanation: '围场运营的月度复盘作用是总结问题，优化策略。'
        },
        {
            id: 50,
            question: '围场运营与目标拆解的关系是？',
            options: [
                '围场运营是目标拆解的落地执行',
                '两者没有关系',
                '围场运营只影响财务',
                '目标拆解只影响招聘'
            ],
            correct: 0,
            explanation: '围场运营与目标拆解的关系是围场运营是目标拆解的落地执行。'
        }
    ],
    5: [
        {
            id: 1,
            question: '排兵的主要目的是？',
            options: [
                '提升学员生命周期的续费率',
                '提高招聘效率',
                '增加投诉率',
                '财务核算准确性'
            ],
            correct: 0,
            explanation: '排兵的主要目的是提升学员生命周期的续费率。'
        },
        {
            id: 2,
            question: '排兵工作通常由谁负责？',
            options: [
                '区域运营/SM',
                '财务',
                '市场',
                '招聘部门'
            ],
            correct: 0,
            explanation: '排兵工作通常由区域运营/SM负责。'
        },
        {
            id: 3,
            question: '排兵的核心原则是？',
            options: [
                '围场优先、指标明确、节奏统一',
                '招聘优先、财务准确',
                '投诉优先、退费控制',
                '市场优先、推广到位'
            ],
            correct: 0,
            explanation: '排兵的核心原则是围场优先、指标明确、节奏统一。'
        },
        {
            id: 4,
            question: '排兵的关键对象是？',
            options: [
                'SS与LP团队',
                '财务人员',
                '招聘人员',
                '市场专员'
            ],
            correct: 0,
            explanation: '排兵的关键对象是SS与LP团队。'
        },
        {
            id: 5,
            question: '排兵中的"围场"指的是？',
            options: [
                '特定生命周期阶段的学员集合',
                '财务部门',
                '招聘部门',
                '投诉部门'
            ],
            correct: 0,
            explanation: '排兵中的"围场"指的是特定生命周期阶段的学员集合。'
        },
        {
            id: 6,
            question: '排兵的节奏通常是？',
            options: [
                '月度、周度、日度',
                '季度、半年',
                '年度',
                '任意'
            ],
            correct: 0,
            explanation: '排兵的节奏通常是月度、周度、日度。'
        },
        {
            id: 7,
            question: '排兵中的"一对一分配"原则是？',
            options: [
                '学员分配到指定SS/LP',
                '招聘分配到指定HR',
                '财务分配到指定会计',
                '市场分配到指定推广员'
            ],
            correct: 0,
            explanation: '排兵中的"一对一分配"原则是学员分配到指定SS/LP。'
        },
        {
            id: 8,
            question: '排兵时，优先级最高的学员是？',
            options: [
                '到期围场学员',
                '新购学员',
                '投诉学员',
                '财务结算中的学员'
            ],
            correct: 0,
            explanation: '排兵时，优先级最高的学员是到期围场学员。'
        },
        {
            id: 9,
            question: '排兵案例中，SS最关注的是？',
            options: [
                '到期学员与升舱学员',
                '财务准确率',
                '投诉率',
                '招聘进度'
            ],
            correct: 0,
            explanation: '排兵案例中，SS最关注的是到期学员与升舱学员。'
        },
        {
            id: 10,
            question: '排兵案例中，LP最关注的是？',
            options: [
                '课耗不足的学员',
                '财务对账',
                '招聘流程',
                '投诉率'
            ],
            correct: 0,
            explanation: '排兵案例中，LP最关注的是课耗不足的学员。'
        },
        {
            id: 11,
            question: '排兵时，如何确保公平？',
            options: [
                '按照区域统一规则分配',
                '按照财务报表分配',
                '按照招聘人数分配',
                '按照投诉数量分配'
            ],
            correct: 0,
            explanation: '排兵时，如何确保公平是按照区域统一规则分配。'
        },
        {
            id: 12,
            question: '排兵的最终落脚点是？',
            options: [
                '提高课耗与续费',
                '提高退费率',
                '提高投诉率',
                '提高财务结算效率'
            ],
            correct: 0,
            explanation: '排兵的最终落脚点是提高课耗与续费。'
        },
        {
            id: 13,
            question: '排兵案例中，"双人配合"的含义是？',
            options: [
                'SS负责业绩，LP负责服务',
                '财务负责对账，市场负责推广',
                '招聘负责面试，HR负责培训',
                '投诉负责处理，客服负责记录'
            ],
            correct: 0,
            explanation: '排兵案例中，"双人配合"的含义是SS负责业绩，LP负责服务。'
        },
        {
            id: 14,
            question: '排兵节奏中，"周复盘"的目的是什么？',
            options: [
                '检查执行情况，优化排兵策略',
                '财务结算',
                '招聘评估',
                'IT优化'
            ],
            correct: 0,
            explanation: '排兵节奏中，"周复盘"的目的是检查执行情况，优化排兵策略。'
        },
        {
            id: 15,
            question: '排兵案例中的"二八原则"主要指？',
            options: [
                '20%的学员贡献80%的业绩',
                '20%的投诉影响80%的口碑',
                '20%的财务错误影响80%的报表',
                '20%的招聘成功带来80%的产出'
            ],
            correct: 0,
            explanation: '排兵案例中的"二八原则"主要指20%的学员贡献80%的业绩。'
        },
        {
            id: 16,
            question: '排兵时，LP常见的工作方式是？',
            options: [
                '学情诊断、学习规划、课耗跟进',
                '财务核算、对账',
                '招聘、面试',
                '投诉记录'
            ],
            correct: 0,
            explanation: '排兵时，LP常见的工作方式是学情诊断、学习规划、课耗跟进。'
        },
        {
            id: 17,
            question: '排兵时，SS常见的工作方式是？',
            options: [
                '到期提醒、续费沟通、升舱推进',
                '招聘、培训',
                '财务报表',
                '投诉处理'
            ],
            correct: 0,
            explanation: '排兵时，SS常见的工作方式是到期提醒、续费沟通、升舱推进。'
        },
        {
            id: 18,
            question: '排兵案例中，SM的角色是？',
            options: [
                '统筹安排团队资源',
                '财务管理',
                '招聘管理',
                '市场推广'
            ],
            correct: 0,
            explanation: '排兵案例中，SM的角色是统筹安排团队资源。'
        },
        {
            id: 19,
            question: '排兵策略调整通常基于？',
            options: [
                '数据看板和业绩进度',
                '财务对账情况',
                '招聘情况',
                '投诉数量'
            ],
            correct: 0,
            explanation: '排兵策略调整通常基于数据看板和业绩进度。'
        },
        {
            id: 20,
            question: '排兵案例中的"分兵"原则是？',
            options: [
                '高价值学员优先分配',
                '招聘人数平均分配',
                '财务任务平均分配',
                '投诉数量平均分配'
            ],
            correct: 0,
            explanation: '排兵案例中的"分兵"原则是高价值学员优先分配。'
        },
        {
            id: 21,
            question: '某月围场人数下降，排兵策略应如何调整？',
            options: [
                '加强低消执行与到期提醒',
                '提高退费',
                '增加投诉处理',
                '增加招聘'
            ],
            correct: 0,
            explanation: '某月围场人数下降，排兵策略应加强低消执行与到期提醒。'
        },
        {
            id: 22,
            question: '围场人数不足的应对措施是？',
            options: [
                '加强首月升舱和期间围场管理',
                '财务调整',
                '招聘更多新人',
                '投诉跟进'
            ],
            correct: 0,
            explanation: '围场人数不足的应对措施是加强首月升舱和期间围场管理。'
        },
        {
            id: 23,
            question: '如果学员课耗不足，LP应采取的措施是？',
            options: [
                '提高陪伴频次和学习指导',
                '财务结算',
                '招聘支持',
                '投诉处理'
            ],
            correct: 0,
            explanation: '如果学员课耗不足，LP应采取的措施是提高陪伴频次和学习指导。'
        },
        {
            id: 24,
            question: 'SS在遇到到期未续费学员时应采取什么策略？',
            options: [
                '提前续费沟通',
                '财务核算',
                '招聘',
                '投诉跟进'
            ],
            correct: 0,
            explanation: 'SS在遇到到期未续费学员时应采取提前续费沟通策略。'
        },
        {
            id: 25,
            question: '排兵复盘的关键指标是？',
            options: [
                '人数、转率、客单价',
                '招聘人数',
                '财务结算速度',
                '投诉数量'
            ],
            correct: 0,
            explanation: '排兵复盘的关键指标是人数、转率、客单价。'
        },
        {
            id: 26,
            question: '学员流失严重时，排兵策略应？',
            options: [
                '增强围场管理与复盘',
                '提高退费率',
                '增加投诉',
                '降低课耗'
            ],
            correct: 0,
            explanation: '学员流失严重时，排兵策略应增强围场管理与复盘。'
        },
        {
            id: 27,
            question: '当团队SS人数不足时，SM应如何排兵？',
            options: [
                '提高LP的配合比例',
                '减少学员',
                '调整财务预算',
                '增加投诉处理'
            ],
            correct: 0,
            explanation: '当团队SS人数不足时，SM应提高LP的配合比例。'
        },
        {
            id: 28,
            question: '排兵案例中，LP课耗不足的常见原因是？',
            options: [
                '学员缺乏学习规划',
                '财务问题',
                '招聘问题',
                '投诉问题'
            ],
            correct: 0,
            explanation: '排兵案例中，LP课耗不足的常见原因是学员缺乏学习规划。'
        },
        {
            id: 29,
            question: 'SS续费未达标的常见原因是？',
            options: [
                '没有提前跟进到期学员',
                '财务结算延迟',
                '招聘不及时',
                '投诉增加'
            ],
            correct: 0,
            explanation: 'SS续费未达标的常见原因是没有提前跟进到期学员。'
        },
        {
            id: 30,
            question: '围场人数减少的直接风险是？',
            options: [
                '转率下降，业绩受影响',
                '投诉增加',
                '财务成本上升',
                '招聘不足'
            ],
            correct: 0,
            explanation: '围场人数减少的直接风险是转率下降，业绩受影响。'
        },
        {
            id: 31,
            question: '排兵案例中，"重点突破"策略的含义是？',
            options: [
                '集中资源攻坚高价值学员',
                '财务集中',
                '招聘集中',
                '投诉集中'
            ],
            correct: 0,
            explanation: '排兵案例中，"重点突破"策略的含义是集中资源攻坚高价值学员。'
        },
        {
            id: 32,
            question: '排兵时，如何避免资源浪费？',
            options: [
                '精准分配学员到合适的SS/LP',
                '平均分配财务任务',
                '平均分配招聘任务',
                '平均分配投诉处理'
            ],
            correct: 0,
            explanation: '排兵时，如何避免资源浪费是精准分配学员到合适的SS/LP。'
        },
        {
            id: 33,
            question: '围场转率低的应对措施是？',
            options: [
                '加强服务与销售配合',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '围场转率低的应对措施是加强服务与销售配合。'
        },
        {
            id: 34,
            question: '排兵中，SM应优先保障哪类学员？',
            options: [
                '到期与期间学员',
                '新购学员',
                '投诉学员',
                '招聘学员'
            ],
            correct: 0,
            explanation: '排兵中，SM应优先保障到期与期间学员。'
        },
        {
            id: 35,
            question: '排兵案例中，"组合排兵"指的是？',
            options: [
                '根据不同围场组合SS与LP',
                '财务与招聘组合',
                '投诉与客服组合',
                '市场与推广组合'
            ],
            correct: 0,
            explanation: '排兵案例中，"组合排兵"指的是根据不同围场组合SS与LP。'
        },
        {
            id: 36,
            question: '围场课耗不足的解决方案是？',
            options: [
                'LP加强学习陪伴',
                '财务支持',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '围场课耗不足的解决方案是LP加强学习陪伴。'
        },
        {
            id: 37,
            question: 'SS排兵时，续费沟通的最佳时机是？',
            options: [
                '到期前1个月',
                '到期当天',
                '到期后',
                '随机'
            ],
            correct: 0,
            explanation: 'SS排兵时，续费沟通的最佳时机是到期前1个月。'
        },
        {
            id: 38,
            question: '围场转率提升的关键在于？',
            options: [
                'SS与LP双人配合',
                '财务支持',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '围场转率提升的关键在于SS与LP双人配合。'
        },
        {
            id: 39,
            question: '排兵案例中，"灵活调整"指？',
            options: [
                '根据实时数据调整分兵策略',
                '财务实时调整',
                '招聘实时调整',
                '投诉实时调整'
            ],
            correct: 0,
            explanation: '排兵案例中，"灵活调整"指根据实时数据调整分兵策略。'
        },
        {
            id: 40,
            question: '排兵案例中的"红线管理"指？',
            options: [
                '严格执行规则，避免违规分配',
                '财务红线',
                '招聘红线',
                '投诉红线'
            ],
            correct: 0,
            explanation: '排兵案例中的"红线管理"指严格执行规则，避免违规分配。'
        },
        {
            id: 41,
            question: '排兵效果的最终评估标准是？',
            options: [
                '课耗与续费率',
                '财务结算',
                '招聘完成率',
                '投诉数量'
            ],
            correct: 0,
            explanation: '排兵效果的最终评估标准是课耗与续费率。'
        },
        {
            id: 42,
            question: '排兵优化的主要方式是？',
            options: [
                '数据复盘与经验总结',
                '财务优化',
                '招聘优化',
                '投诉优化'
            ],
            correct: 0,
            explanation: '排兵优化的主要方式是数据复盘与经验总结。'
        },
        {
            id: 43,
            question: '排兵复盘的频率通常是？',
            options: [
                '周度和月度',
                '季度',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '排兵复盘的频率通常是周度和月度。'
        },
        {
            id: 44,
            question: '排兵优化的核心目标是？',
            options: [
                '提升执行效率和业绩结果',
                '提高退费率',
                '提高投诉率',
                '提高财务成本'
            ],
            correct: 0,
            explanation: '排兵优化的核心目标是提升执行效率和业绩结果。'
        },
        {
            id: 45,
            question: '排兵案例中，常见的执行问题是？',
            options: [
                '学员分配不均、节奏失衡',
                '财务报表不准',
                '招聘不及时',
                '投诉处理延迟'
            ],
            correct: 0,
            explanation: '排兵案例中，常见的执行问题是学员分配不均、节奏失衡。'
        },
        {
            id: 46,
            question: '排兵案例中，团队配合不畅的后果是？',
            options: [
                '转率下降',
                '投诉增加',
                '招聘失败',
                '财务错误'
            ],
            correct: 0,
            explanation: '排兵案例中，团队配合不畅的后果是转率下降。'
        },
        {
            id: 47,
            question: '排兵优化的关键能力是？',
            options: [
                '数据分析与执行力',
                '财务能力',
                '招聘能力',
                '投诉能力'
            ],
            correct: 0,
            explanation: '排兵优化的关键能力是数据分析与执行力。'
        },
        {
            id: 48,
            question: '排兵案例中的"闭环管理"指？',
            options: [
                '从排兵到复盘的完整流程',
                '财务闭环',
                '招聘闭环',
                '投诉闭环'
            ],
            correct: 0,
            explanation: '排兵案例中的"闭环管理"指从排兵到复盘的完整流程。'
        },
        {
            id: 49,
            question: '排兵优化的直接效果是？',
            options: [
                '转率提升、续费率提高',
                '投诉增加',
                '招聘增加',
                '财务负担增加'
            ],
            correct: 0,
            explanation: '排兵优化的直接效果是转率提升、续费率提高。'
        },
        {
            id: 50,
            question: '排兵案例的最终目标是？',
            options: [
                '提升业绩达成与学员满意度',
                '提高投诉',
                '提高退费',
                '提高财务成本'
            ],
            correct: 0,
            explanation: '排兵案例的最终目标是提升业绩达成与学员满意度。'
        }
    ],
    6: [
        {
            id: 1,
            question: 'PDCA循环中的P代表什么？',
            options: [
                '执行（Do）',
                '计划（Plan）',
                '检查（Check）',
                '行动（Action）'
            ],
            correct: 1,
            explanation: 'PDCA循环中的P代表计划（Plan）。'
        },
        {
            id: 2,
            question: 'PDCA循环中的D代表什么？',
            options: [
                '执行（Do）',
                '检查（Check）',
                '改进（Adjust）',
                '计划（Plan）'
            ],
            correct: 0,
            explanation: 'PDCA循环中的D代表执行（Do）。'
        },
        {
            id: 3,
            question: 'PDCA循环中的C代表什么？',
            options: [
                '改进',
                '检查（Check）',
                '计划',
                '执行'
            ],
            correct: 1,
            explanation: 'PDCA循环中的C代表检查（Check）。'
        },
        {
            id: 4,
            question: 'PDCA循环中的A代表什么？',
            options: [
                '计划',
                '行动/改进（Action）',
                '检查',
                '执行'
            ],
            correct: 1,
            explanation: 'PDCA循环中的A代表行动/改进（Action）。'
        },
        {
            id: 5,
            question: '促销管理中引入PDCA的目的是什么？',
            options: [
                '提高促销执行效率和闭环管理',
                '提高投诉率',
                '提高退费率',
                '降低课耗'
            ],
            correct: 0,
            explanation: '促销管理中引入PDCA的目的是提高促销执行效率和闭环管理。'
        },
        {
            id: 6,
            question: '促销管理中，PDCA的第一步是？',
            options: [
                '执行',
                '计划',
                '检查',
                '改进'
            ],
            correct: 1,
            explanation: '促销管理中，PDCA的第一步是计划。'
        },
        {
            id: 7,
            question: '在PDCA循环中，促销数据复盘属于哪一环节？',
            options: [
                '计划',
                '执行',
                '检查',
                '改进'
            ],
            correct: 2,
            explanation: '在PDCA循环中，促销数据复盘属于检查环节。'
        },
        {
            id: 8,
            question: '在PDCA循环中，促销优化方案的落地属于哪一环节？',
            options: [
                '改进（Action）',
                '检查',
                '计划',
                '执行'
            ],
            correct: 0,
            explanation: '在PDCA循环中，促销优化方案的落地属于改进（Action）环节。'
        },
        {
            id: 9,
            question: 'PDCA循环强调的管理理念是？',
            options: [
                '持续改进',
                '一次性解决',
                '静态复盘',
                '财务优化'
            ],
            correct: 0,
            explanation: 'PDCA循环强调的管理理念是持续改进。'
        },
        {
            id: 10,
            question: '在促销管理中应用PDCA循环的最终目标是？',
            options: [
                '提升业绩与学员满意度',
                '提高投诉率',
                '提高退费率',
                '提高财务成本'
            ],
            correct: 0,
            explanation: '在促销管理中应用PDCA循环的最终目标是提升业绩与学员满意度。'
        },
        {
            id: 11,
            question: '制定促销计划的第一步是？',
            options: [
                '明确目标',
                '财务核算',
                '招聘',
                '投诉管理'
            ],
            correct: 0,
            explanation: '制定促销计划的第一步是明确目标。'
        },
        {
            id: 12,
            question: '促销计划的目标通常包括？',
            options: [
                '提高续费率与课耗',
                '招聘人数',
                '投诉数量',
                '财务准确率'
            ],
            correct: 0,
            explanation: '促销计划的目标通常包括提高续费率与课耗。'
        },
        {
            id: 13,
            question: '促销计划需遵循的原则是？',
            options: [
                'SMART原则',
                '招聘原则',
                '财务原则',
                'IT原则'
            ],
            correct: 0,
            explanation: '促销计划需遵循的原则是SMART原则。'
        },
        {
            id: 14,
            question: '促销计划的制定需结合？',
            options: [
                '学员生命周期与围场情况',
                '财务结算',
                '招聘计划',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销计划的制定需结合学员生命周期与围场情况。'
        },
        {
            id: 15,
            question: '在促销计划阶段，需重点考虑的要素是？',
            options: [
                '目标、预算、学员群体、节奏',
                '财务成本、招聘效率',
                '投诉数量、退费率',
                'IT系统稳定性'
            ],
            correct: 0,
            explanation: '在促销计划阶段，需重点考虑的要素是目标、预算、学员群体、节奏。'
        },
        {
            id: 16,
            question: '促销活动的时间安排需考虑？',
            options: [
                '学员生命周期关键节点',
                '财务结算周期',
                '招聘时间',
                '投诉高峰期'
            ],
            correct: 0,
            explanation: '促销活动的时间安排需考虑学员生命周期关键节点。'
        },
        {
            id: 17,
            question: '促销计划中，学员分层的意义是？',
            options: [
                '不同层级学员匹配不同促销方案',
                '财务核算分层',
                '招聘层级划分',
                '投诉等级划分'
            ],
            correct: 0,
            explanation: '促销计划中，学员分层的意义是不同层级学员匹配不同促销方案。'
        },
        {
            id: 18,
            question: '促销计划阶段，预算制定需兼顾？',
            options: [
                '成本与收益平衡',
                '招聘与培训',
                '投诉与退费',
                '财务与IT'
            ],
            correct: 0,
            explanation: '促销计划阶段，预算制定需兼顾成本与收益平衡。'
        },
        {
            id: 19,
            question: '促销计划阶段的最终成果是？',
            options: [
                '完整的促销方案',
                '财务报表',
                '招聘清单',
                '投诉报告'
            ],
            correct: 0,
            explanation: '促销计划阶段的最终成果是完整的促销方案。'
        },
        {
            id: 20,
            question: '制定促销计划时需避免？',
            options: [
                '目标模糊、节奏不清、预算不合理',
                '投诉增加',
                '招聘过多',
                '财务冗余'
            ],
            correct: 0,
            explanation: '制定促销计划时需避免目标模糊、节奏不清、预算不合理。'
        },
        {
            id: 21,
            question: '促销执行的第一步是？',
            options: [
                '方案落地与宣导',
                '财务核算',
                '招聘安排',
                '投诉管理'
            ],
            correct: 0,
            explanation: '促销执行的第一步是方案落地与宣导。'
        },
        {
            id: 22,
            question: '促销执行中，团队动员的目的是什么？',
            options: [
                '确保所有人理解并落实方案',
                '财务准确性',
                '招聘效率',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销执行中，团队动员的目的是确保所有人理解并落实方案。'
        },
        {
            id: 23,
            question: '执行阶段的关键动作是？',
            options: [
                '宣导、资源准备、节点把控',
                '财务核算',
                '招聘管理',
                '投诉管理'
            ],
            correct: 0,
            explanation: '执行阶段的关键动作是宣导、资源准备、节点把控。'
        },
        {
            id: 24,
            question: '在促销执行中，LP的主要职责是？',
            options: [
                '提升课耗和学员参与度',
                '招聘',
                '财务对账',
                '投诉处理'
            ],
            correct: 0,
            explanation: '在促销执行中，LP的主要职责是提升课耗和学员参与度。'
        },
        {
            id: 25,
            question: '在促销执行中，SS的主要职责是？',
            options: [
                '推动续费转化',
                '投诉处理',
                '财务结算',
                '招聘'
            ],
            correct: 0,
            explanation: '在促销执行中，SS的主要职责是推动续费转化。'
        },
        {
            id: 26,
            question: '促销执行中，常见的风险点是？',
            options: [
                '学员反馈不佳、执行不到位',
                '财务报表不准',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '促销执行中，常见的风险点是学员反馈不佳、执行不到位。'
        },
        {
            id: 27,
            question: '为确保执行到位，SM需要？',
            options: [
                '过程跟进与现场把控',
                '财务管理',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '为确保执行到位，SM需要过程跟进与现场把控。'
        },
        {
            id: 28,
            question: '促销执行中，区域运营的支持包括？',
            options: [
                '数据支持与策略跟进',
                '财务报表',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销执行中，区域运营的支持包括数据支持与策略跟进。'
        },
        {
            id: 29,
            question: '执行阶段的成功标志是？',
            options: [
                '按计划顺利落地，学员积极参与',
                '财务准确性',
                '招聘人数',
                '投诉减少'
            ],
            correct: 0,
            explanation: '执行阶段的成功标志是按计划顺利落地，学员积极参与。'
        },
        {
            id: 30,
            question: '执行阶段的难点是？',
            options: [
                '确保方案在一线完整落地',
                '财务核算',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '执行阶段的难点是确保方案在一线完整落地。'
        },
        {
            id: 31,
            question: '检查环节的核心是？',
            options: [
                '数据复盘与问题识别',
                '财务结算',
                '招聘评估',
                '投诉处理'
            ],
            correct: 0,
            explanation: '检查环节的核心是数据复盘与问题识别。'
        },
        {
            id: 32,
            question: '检查阶段需对比的对象是？',
            options: [
                '实际结果与计划目标',
                '财务预算',
                '招聘需求',
                '投诉报告'
            ],
            correct: 0,
            explanation: '检查阶段需对比的对象是实际结果与计划目标。'
        },
        {
            id: 33,
            question: '检查阶段的主要工具是？',
            options: [
                '数据看板与报表',
                '财务系统',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '检查阶段的主要工具是数据看板与报表。'
        },
        {
            id: 34,
            question: '检查阶段的核心数据是？',
            options: [
                '人数、转率、客单价',
                '财务成本',
                '招聘人数',
                '投诉率'
            ],
            correct: 0,
            explanation: '检查阶段的核心数据是人数、转率、客单价。'
        },
        {
            id: 35,
            question: '检查阶段的关键责任人是？',
            options: [
                '区域运营与SM',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '检查阶段的关键责任人是区域运营与SM。'
        },
        {
            id: 36,
            question: '检查阶段需避免的问题是？',
            options: [
                '数据不准、复盘不完整',
                '投诉延迟',
                '招聘不足',
                '财务冗余'
            ],
            correct: 0,
            explanation: '检查阶段需避免的问题是数据不准、复盘不完整。'
        },
        {
            id: 37,
            question: '检查阶段的成果是？',
            options: [
                '促销复盘报告',
                '财务报表',
                '招聘清单',
                '投诉记录'
            ],
            correct: 0,
            explanation: '检查阶段的成果是促销复盘报告。'
        },
        {
            id: 38,
            question: '检查阶段的复盘频率是？',
            options: [
                '促销结束后立即',
                '季度末',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '检查阶段的复盘频率是促销结束后立即。'
        },
        {
            id: 39,
            question: '检查阶段的核心作用是？',
            options: [
                '发现问题，积累经验',
                '提高退费',
                '提高投诉',
                '财务结算'
            ],
            correct: 0,
            explanation: '检查阶段的核心作用是发现问题，积累经验。'
        },
        {
            id: 40,
            question: '检查阶段的重点是？',
            options: [
                '对比目标与结果，找到差距',
                '财务优化',
                '招聘优化',
                '投诉优化'
            ],
            correct: 0,
            explanation: '检查阶段的重点是对比目标与结果，找到差距。'
        },
        {
            id: 41,
            question: '改进环节的核心是？',
            options: [
                '制定优化方案并落地',
                '财务结算',
                '招聘',
                '投诉处理'
            ],
            correct: 0,
            explanation: '改进环节的核心是制定优化方案并落地。'
        },
        {
            id: 42,
            question: '改进阶段的目标是？',
            options: [
                '持续优化促销策略与执行',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '改进阶段的目标是持续优化促销策略与执行。'
        },
        {
            id: 43,
            question: '改进阶段的关键责任人是？',
            options: [
                '区域运营与中台',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '改进阶段的关键责任人是区域运营与中台。'
        },
        {
            id: 44,
            question: '改进阶段需结合的依据是？',
            options: [
                '检查阶段的复盘结果',
                '财务报表',
                '招聘清单',
                '投诉数据'
            ],
            correct: 0,
            explanation: '改进阶段需结合的依据是检查阶段的复盘结果。'
        },
        {
            id: 45,
            question: '改进措施需具备什么特征？',
            options: [
                '可执行、可量化、可落地',
                '投诉可控',
                '招聘可持续',
                '财务可对账'
            ],
            correct: 0,
            explanation: '改进措施需具备可执行、可量化、可落地的特征。'
        },
        {
            id: 46,
            question: '改进阶段需避免的问题是？',
            options: [
                '方案空洞、未落地',
                '投诉延迟',
                '招聘滞后',
                '财务报表错误'
            ],
            correct: 0,
            explanation: '改进阶段需避免的问题是方案空洞、未落地。'
        },
        {
            id: 47,
            question: '改进阶段的落地过程需？',
            options: [
                'SM与一线团队共同执行',
                '财务主导',
                '招聘主导',
                '投诉主导'
            ],
            correct: 0,
            explanation: '改进阶段的落地过程需SM与一线团队共同执行。'
        },
        {
            id: 48,
            question: '改进阶段的监控工具是？',
            options: [
                '数据看板与复盘结果',
                '财务报表',
                '招聘系统',
                '投诉记录'
            ],
            correct: 0,
            explanation: '改进阶段的监控工具是数据看板与复盘结果。'
        },
        {
            id: 49,
            question: '改进阶段的最终评判标准是？',
            options: [
                '新一轮促销效果是否改善',
                '投诉减少',
                '财务准确',
                '招聘增加'
            ],
            correct: 0,
            explanation: '改进阶段的最终评判标准是新一轮促销效果是否改善。'
        },
        {
            id: 50,
            question: '促销管理PDCA循环的最终目标是？',
            options: [
                '持续改进，提升业绩和学员满意度',
                '提高投诉率',
                '提高退费率',
                '提高财务负担'
            ],
            correct: 0,
            explanation: '促销管理PDCA循环的最终目标是持续改进，提升业绩和学员满意度。'
        }
    ],
    7: [
        {
            id: 1,
            question: '促销活动开始前的第一步是？',
            options: [
                '明确促销目标',
                '财务结算',
                '招聘新人',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销活动开始前的第一步是明确促销目标。'
        },
        {
            id: 2,
            question: '促销活动的目标通常包括？',
            options: [
                '提高续费率和课耗率',
                '提高退费率',
                '提高投诉率',
                '降低招聘率'
            ],
            correct: 0,
            explanation: '促销活动的目标通常包括提高续费率和课耗率。'
        },
        {
            id: 3,
            question: '促销前的数据准备主要涉及？',
            options: [
                '围场人数、转率、客单价',
                '招聘人数',
                '财务人数',
                '投诉数量'
            ],
            correct: 0,
            explanation: '促销前的数据准备主要涉及围场人数、转率、客单价。'
        },
        {
            id: 4,
            question: '促销准备阶段，预算编制需考虑？',
            options: [
                '成本与收益平衡',
                '招聘效率',
                '投诉数量',
                '财务报表'
            ],
            correct: 0,
            explanation: '促销准备阶段，预算编制需考虑成本与收益平衡。'
        },
        {
            id: 5,
            question: '促销活动时间节点需结合？',
            options: [
                '学员生命周期关键点',
                '财务结算周期',
                '招聘时间',
                '投诉处理周期'
            ],
            correct: 0,
            explanation: '促销活动时间节点需结合学员生命周期关键点。'
        },
        {
            id: 6,
            question: '促销活动中，目标分解的落脚点是？',
            options: [
                '每个SS/LP的个人目标',
                '财务目标',
                '招聘目标',
                '投诉目标'
            ],
            correct: 0,
            explanation: '促销活动中，目标分解的落脚点是每个SS/LP的个人目标。'
        },
        {
            id: 7,
            question: '促销活动前的团队宣导作用是？',
            options: [
                '确保目标清晰、执行一致',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '促销活动前的团队宣导作用是确保目标清晰、执行一致。'
        },
        {
            id: 8,
            question: '促销前学员分层的目的是什么？',
            options: [
                '匹配不同的促销方案',
                '区分财务等级',
                '区分招聘批次',
                '区分投诉等级'
            ],
            correct: 0,
            explanation: '促销前学员分层的目的是匹配不同的促销方案。'
        },
        {
            id: 9,
            question: '促销活动预算的执行主体是？',
            options: [
                '区域运营与SM',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销活动预算的执行主体是区域运营与SM。'
        },
        {
            id: 10,
            question: '促销准备阶段的风险点是？',
            options: [
                '目标不清晰、预算不合理',
                '招聘不及时',
                '财务结算错误',
                '投诉增加'
            ],
            correct: 0,
            explanation: '促销准备阶段的风险点是目标不清晰、预算不合理。'
        },
        {
            id: 11,
            question: '促销活动中，资源准备通常包括？',
            options: [
                '话术、物料、系统支持',
                '财务对账',
                '招聘流程',
                '投诉管理'
            ],
            correct: 0,
            explanation: '促销活动中，资源准备通常包括话术、物料、系统支持。'
        },
        {
            id: 12,
            question: '促销活动前的核心复盘数据包括？',
            options: [
                '上一周期的续费率与课耗率',
                '投诉数量',
                '招聘人数',
                '财务结算'
            ],
            correct: 0,
            explanation: '促销活动前的核心复盘数据包括上一周期的续费率与课耗率。'
        },
        {
            id: 13,
            question: '促销活动准备时，SM的作用是？',
            options: [
                '统筹目标与资源，分配任务',
                '财务结算',
                '招聘管理',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销活动准备时，SM的作用是统筹目标与资源，分配任务。'
        },
        {
            id: 14,
            question: '促销活动准备阶段，中台的作用是？',
            options: [
                '提供统一规则与逻辑支持',
                '招聘',
                '财务核算',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销活动准备阶段，中台的作用是提供统一规则与逻辑支持。'
        },
        {
            id: 15,
            question: '促销准备阶段的最终产出是？',
            options: [
                '完整的促销执行方案',
                '财务报表',
                '招聘计划',
                '投诉报告'
            ],
            correct: 0,
            explanation: '促销准备阶段的最终产出是完整的促销执行方案。'
        },
        {
            id: 16,
            question: '促销执行中，SS的核心动作是？',
            options: [
                '推动续费与升舱',
                '招聘',
                '财务核算',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销执行中，SS的核心动作是推动续费与升舱。'
        },
        {
            id: 17,
            question: '促销执行中，LP的核心动作是？',
            options: [
                '提高学员课耗与参与度',
                '招聘',
                '财务结算',
                '投诉'
            ],
            correct: 0,
            explanation: '促销执行中，LP的核心动作是提高学员课耗与参与度。'
        },
        {
            id: 18,
            question: '促销执行时，团队动员的目的是什么？',
            options: [
                '确保目标统一、节奏一致',
                '提高退费率',
                '提高投诉率',
                '增加财务压力'
            ],
            correct: 0,
            explanation: '促销执行时，团队动员的目的是确保目标统一、节奏一致。'
        },
        {
            id: 19,
            question: '促销执行中，SM的作用是？',
            options: [
                '跟进过程，保障落地',
                '财务对账',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销执行中，SM的作用是跟进过程，保障落地。'
        },
        {
            id: 20,
            question: '促销执行中，区域运营的支持是？',
            options: [
                '数据跟踪与策略调整',
                '财务支持',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '促销执行中，区域运营的支持是数据跟踪与策略调整。'
        },
        {
            id: 21,
            question: '促销执行阶段的核心目标是？',
            options: [
                '达成既定转率与续费目标',
                '提高退费率',
                '提高投诉率',
                '增加财务负担'
            ],
            correct: 0,
            explanation: '促销执行阶段的核心目标是达成既定转率与续费目标。'
        },
        {
            id: 22,
            question: '促销执行中常见的难点是？',
            options: [
                '一线执行不到位',
                '财务结算延误',
                '招聘不到位',
                '投诉激增'
            ],
            correct: 0,
            explanation: '促销执行中常见的难点是一线执行不到位。'
        },
        {
            id: 23,
            question: '促销执行中的学员沟通重点是？',
            options: [
                '到期提醒与升舱机会',
                '财务管理',
                '招聘安排',
                '投诉反馈'
            ],
            correct: 0,
            explanation: '促销执行中的学员沟通重点是到期提醒与升舱机会。'
        },
        {
            id: 24,
            question: '促销执行阶段的核心资源是？',
            options: [
                '话术与学员服务节奏',
                '财务报表',
                '招聘清单',
                '投诉数据'
            ],
            correct: 0,
            explanation: '促销执行阶段的核心资源是话术与学员服务节奏。'
        },
        {
            id: 25,
            question: '促销执行中，如何保障节奏统一？',
            options: [
                '制定标准化SOP与节点把控',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '促销执行中，保障节奏统一需要制定标准化SOP与节点把控。'
        },
        {
            id: 26,
            question: '促销执行阶段，学员参与度低的应对方式是？',
            options: [
                'LP加强陪伴与课耗管理',
                '财务调整',
                '招聘调整',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销执行阶段，学员参与度低的应对方式是LP加强陪伴与课耗管理。'
        },
        {
            id: 27,
            question: '促销执行中，SS遇到拒绝续费学员的策略是？',
            options: [
                '二次沟通与差异化话术',
                '财务结算',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销执行中，SS遇到拒绝续费学员的策略是二次沟通与差异化话术。'
        },
        {
            id: 28,
            question: '促销执行阶段，团队协作的关键是？',
            options: [
                'SS与LP双人配合',
                '财务协作',
                '招聘协作',
                '投诉协作'
            ],
            correct: 0,
            explanation: '促销执行阶段，团队协作的关键是SS与LP双人配合。'
        },
        {
            id: 29,
            question: '促销执行中，常用的推进方式是？',
            options: [
                '节点提醒与数据跟踪',
                '财务提醒',
                '招聘提醒',
                '投诉提醒'
            ],
            correct: 0,
            explanation: '促销执行中，常用的推进方式是节点提醒与数据跟踪。'
        },
        {
            id: 30,
            question: '促销执行中，学员课耗不足的直接风险是？',
            options: [
                '续费率下降',
                '投诉率上升',
                '财务压力',
                '招聘压力'
            ],
            correct: 0,
            explanation: '促销执行中，学员课耗不足的直接风险是续费率下降。'
        },
        {
            id: 31,
            question: '促销复盘的核心目的是？',
            options: [
                '发现问题，总结经验',
                '财务结算',
                '招聘总结',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '促销复盘的核心目的是发现问题，总结经验。'
        },
        {
            id: 32,
            question: '促销复盘通常由谁负责牵头？',
            options: [
                '区域运营与SM',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销复盘通常由区域运营与SM负责牵头。'
        },
        {
            id: 33,
            question: '促销复盘的主要依据是？',
            options: [
                '实际结果与目标对比',
                '财务报表',
                '招聘清单',
                '投诉数据'
            ],
            correct: 0,
            explanation: '促销复盘的主要依据是实际结果与目标对比。'
        },
        {
            id: 34,
            question: '促销复盘的关键指标是？',
            options: [
                '人数、转率、客单价',
                '招聘人数',
                '财务人数',
                '投诉数量'
            ],
            correct: 0,
            explanation: '促销复盘的关键指标是人数、转率、客单价。'
        },
        {
            id: 35,
            question: '促销复盘的工具是？',
            options: [
                '数据看板与报表',
                '财务系统',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '促销复盘的工具是数据看板与报表。'
        },
        {
            id: 36,
            question: '促销复盘的最佳时间是？',
            options: [
                '促销活动结束后立即',
                '季度末',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '促销复盘的最佳时间是促销活动结束后立即。'
        },
        {
            id: 37,
            question: '促销复盘的成果是？',
            options: [
                '完整的促销复盘报告',
                '财务报表',
                '招聘清单',
                '投诉报告'
            ],
            correct: 0,
            explanation: '促销复盘的成果是完整的促销复盘报告。'
        },
        {
            id: 38,
            question: '促销复盘的重点是？',
            options: [
                '找到目标与结果的差距',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '促销复盘的重点是找到目标与结果的差距。'
        },
        {
            id: 39,
            question: '促销复盘需避免的问题是？',
            options: [
                '数据不准、问题未识别',
                '投诉延迟',
                '招聘不足',
                '财务出错'
            ],
            correct: 0,
            explanation: '促销复盘需避免的问题是数据不准、问题未识别。'
        },
        {
            id: 40,
            question: '促销复盘的直接作用是？',
            options: [
                '优化下一轮促销方案',
                '提高投诉',
                '提高退费',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '促销复盘的直接作用是优化下一轮促销方案。'
        },
        {
            id: 41,
            question: '促销复盘中的"案例分享"目的是？',
            options: [
                '提升团队经验沉淀',
                '财务优化',
                '招聘优化',
                '投诉优化'
            ],
            correct: 0,
            explanation: '促销复盘中的"案例分享"目的是提升团队经验沉淀。'
        },
        {
            id: 42,
            question: '促销复盘的频率是？',
            options: [
                '每次促销活动后',
                '季度',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '促销复盘的频率是每次促销活动后。'
        },
        {
            id: 43,
            question: '促销复盘时，SS重点关注？',
            options: [
                '续费率和转化率',
                '投诉率',
                '招聘人数',
                '财务成本'
            ],
            correct: 0,
            explanation: '促销复盘时，SS重点关注续费率和转化率。'
        },
        {
            id: 44,
            question: '促销复盘时，LP重点关注？',
            options: [
                '课耗和学员参与度',
                '招聘效率',
                '财务效率',
                '投诉数量'
            ],
            correct: 0,
            explanation: '促销复盘时，LP重点关注课耗和学员参与度。'
        },
        {
            id: 45,
            question: '促销复盘的最终目标是？',
            options: [
                '持续优化促销效果',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '促销复盘的最终目标是持续优化促销效果。'
        },
        {
            id: 46,
            question: '促销改进的第一步是？',
            options: [
                '根据复盘结果制定优化方案',
                '财务核算',
                '招聘调整',
                '投诉处理'
            ],
            correct: 0,
            explanation: '促销改进的第一步是根据复盘结果制定优化方案。'
        },
        {
            id: 47,
            question: '促销改进的关键责任人是？',
            options: [
                '区域运营与中台',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销改进的关键责任人是区域运营与中台。'
        },
        {
            id: 48,
            question: '促销改进的核心要求是？',
            options: [
                '优化方案可执行、可落地',
                '投诉减少',
                '财务准确',
                '招聘顺利'
            ],
            correct: 0,
            explanation: '促销改进的核心要求是优化方案可执行、可落地。'
        },
        {
            id: 49,
            question: '促销改进落地时需谁配合？',
            options: [
                'SM与一线团队',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '促销改进落地时需SM与一线团队配合。'
        },
        {
            id: 50,
            question: '促销改进的最终目标是？',
            options: [
                '提高下一轮促销的成功率',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '促销改进的最终目标是提高下一轮促销的成功率。'
        }
    ],
    8: [
        {
            id: 1,
            question: '激励管理的主要目标是？',
            options: [
                '提升员工积极性与业绩达成',
                '提高投诉率',
                '增加财务成本',
                '提高退费率'
            ],
            correct: 0,
            explanation: '激励管理的主要目标是提升员工积极性与业绩达成。'
        },
        {
            id: 2,
            question: '激励机制设计的核心原则是？',
            options: [
                '公平、公正、公开',
                '财务优先',
                '投诉优先',
                '招聘优先'
            ],
            correct: 0,
            explanation: '激励机制设计的核心原则是公平、公正、公开。'
        },
        {
            id: 3,
            question: '激励管理的对象主要是？',
            options: [
                '一线SS与LP团队',
                '财务部门',
                '招聘部门',
                '投诉部门'
            ],
            correct: 0,
            explanation: '激励管理的对象主要是一线SS与LP团队。'
        },
        {
            id: 4,
            question: '激励管理的实施最终落脚点是？',
            options: [
                '业绩指标与学员服务效果',
                '财务成本',
                '招聘人数',
                '投诉数量'
            ],
            correct: 0,
            explanation: '激励管理的实施最终落脚点是业绩指标与学员服务效果。'
        },
        {
            id: 5,
            question: '激励方案设计需结合？',
            options: [
                '业绩目标与过程表现',
                '财务报表',
                '招聘计划',
                '投诉率'
            ],
            correct: 0,
            explanation: '激励方案设计需结合业绩目标与过程表现。'
        },
        {
            id: 6,
            question: '激励管理常见的方式不包括？',
            options: [
                '物质激励',
                '精神激励',
                '财务报表',
                '晋升激励'
            ],
            correct: 2,
            explanation: '激励管理常见的方式不包括财务报表。'
        },
        {
            id: 7,
            question: '激励管理的周期通常是？',
            options: [
                '月度、季度',
                '半年度',
                '年度',
                '任意'
            ],
            correct: 0,
            explanation: '激励管理的周期通常是月度、季度。'
        },
        {
            id: 8,
            question: '激励管理的直接效果是？',
            options: [
                '提升团队执行力与稳定性',
                '增加投诉',
                '增加退费',
                '增加财务压力'
            ],
            correct: 0,
            explanation: '激励管理的直接效果是提升团队执行力与稳定性。'
        },
        {
            id: 9,
            question: '激励机制对业务绩效的作用是？',
            options: [
                '正向驱动业绩达成',
                '增加财务报表工作量',
                '降低招聘难度',
                '提高投诉率'
            ],
            correct: 0,
            explanation: '激励机制对业务绩效的作用是正向驱动业绩达成。'
        },
        {
            id: 10,
            question: '激励机制的风险是？',
            options: [
                '规则不清导致执行混乱',
                '财务报表出错',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '激励机制的风险是规则不清导致执行混乱。'
        },
        {
            id: 11,
            question: '激励方案设计的第一步是？',
            options: [
                '明确激励目标',
                '财务核算',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '激励方案设计的第一步是明确激励目标。'
        },
        {
            id: 12,
            question: '激励目标通常包括？',
            options: [
                '提高续费率与课耗率',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '激励目标通常包括提高续费率与课耗率。'
        },
        {
            id: 13,
            question: '激励指标的设定需遵循？',
            options: [
                'SMART原则',
                '财务原则',
                '招聘原则',
                '投诉原则'
            ],
            correct: 0,
            explanation: '激励指标的设定需遵循SMART原则。'
        },
        {
            id: 14,
            question: '激励方案需覆盖哪类指标？',
            options: [
                '过程指标与结果指标',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '激励方案需覆盖过程指标与结果指标。'
        },
        {
            id: 15,
            question: '过程指标常见的有？',
            options: [
                '学员覆盖率、触达率、课耗率',
                '财务结算率',
                '招聘人数',
                '投诉数量'
            ],
            correct: 0,
            explanation: '过程指标常见的有学员覆盖率、触达率、课耗率。'
        },
        {
            id: 16,
            question: '结果指标常见的有？',
            options: [
                '续费率、升舱率、转介绍率',
                '招聘成功率',
                '财务准确率',
                '投诉率'
            ],
            correct: 0,
            explanation: '结果指标常见的有续费率、升舱率、转介绍率。'
        },
        {
            id: 17,
            question: '激励方案设计中，需兼顾？',
            options: [
                '激励公平性与激励有效性',
                '财务准确性',
                '招聘效率',
                '投诉及时性'
            ],
            correct: 0,
            explanation: '激励方案设计中，需兼顾激励公平性与激励有效性。'
        },
        {
            id: 18,
            question: '激励方案需避免的问题是？',
            options: [
                '指标不清、规则不透明',
                '财务报表错误',
                '招聘不足',
                '投诉处理延迟'
            ],
            correct: 0,
            explanation: '激励方案需避免的问题是指标不清、规则不透明。'
        },
        {
            id: 19,
            question: '激励方案设计的最终成果是？',
            options: [
                '可落地的激励执行方案',
                '财务报表',
                '招聘清单',
                '投诉报告'
            ],
            correct: 0,
            explanation: '激励方案设计的最终成果是可落地的激励执行方案。'
        },
        {
            id: 20,
            question: '激励标准制定需考虑？',
            options: [
                '区域差异与团队差异',
                '财务差异',
                '招聘差异',
                '投诉差异'
            ],
            correct: 0,
            explanation: '激励标准制定需考虑区域差异与团队差异。'
        },
        {
            id: 21,
            question: '激励方案设计中，奖金分配原则是？',
            options: [
                '多劳多得，结果导向',
                '平均分配',
                '财务分配',
                '招聘分配'
            ],
            correct: 0,
            explanation: '激励方案设计中，奖金分配原则是多劳多得，结果导向。'
        },
        {
            id: 22,
            question: '激励管理中的精神激励方式是？',
            options: [
                '公开表扬与荣誉激励',
                '招聘奖励',
                '财务奖励',
                '投诉奖励'
            ],
            correct: 0,
            explanation: '激励管理中的精神激励方式是公开表扬与荣誉激励。'
        },
        {
            id: 23,
            question: '激励方案设计需结合的数据工具是？',
            options: [
                '数据看板与业绩报表',
                '财务报表',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '激励方案设计需结合的数据工具是数据看板与业绩报表。'
        },
        {
            id: 24,
            question: '激励标准需具备的特点是？',
            options: [
                '可量化、可考核、可落地',
                '投诉减少',
                '招聘增加',
                '财务准确'
            ],
            correct: 0,
            explanation: '激励标准需具备的特点是可量化、可考核、可落地。'
        },
        {
            id: 25,
            question: '激励方案设计中需避免的风险是？',
            options: [
                '指标失衡导致短期冲刺过度',
                '财务风险',
                '招聘风险',
                '投诉风险'
            ],
            correct: 0,
            explanation: '激励方案设计中需避免的风险是指标失衡导致短期冲刺过度。'
        },
        {
            id: 26,
            question: '激励执行的第一步是？',
            options: [
                '宣导与明确规则',
                '财务结算',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '激励执行的第一步是宣导与明确规则。'
        },
        {
            id: 27,
            question: '激励执行中，SM的作用是？',
            options: [
                '过程管理与激励兑现',
                '财务结算',
                '招聘管理',
                '投诉管理'
            ],
            correct: 0,
            explanation: '激励执行中，SM的作用是过程管理与激励兑现。'
        },
        {
            id: 28,
            question: '激励执行中，区域运营的支持是？',
            options: [
                '数据监控与复盘',
                '财务支持',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '激励执行中，区域运营的支持是数据监控与复盘。'
        },
        {
            id: 29,
            question: '激励执行需重点关注？',
            options: [
                '规则透明与过程公正',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '激励执行需重点关注规则透明与过程公正。'
        },
        {
            id: 30,
            question: '激励执行中的常见问题是？',
            options: [
                '奖励兑现不及时',
                '财务报表错误',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '激励执行中的常见问题是奖励兑现不及时。'
        },
        {
            id: 31,
            question: '激励执行过程中，团队宣导的作用是？',
            options: [
                '统一认知、提升执行力',
                '财务核算',
                '招聘动员',
                '投诉处理'
            ],
            correct: 0,
            explanation: '激励执行过程中，团队宣导的作用是统一认知、提升执行力。'
        },
        {
            id: 32,
            question: '激励执行阶段的监控方式是？',
            options: [
                '数据看板与定期复盘',
                '财务报表',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '激励执行阶段的监控方式是数据看板与定期复盘。'
        },
        {
            id: 33,
            question: '激励执行中需避免的问题是？',
            options: [
                '规则不透明、执行不一致',
                '财务错误',
                '招聘延迟',
                '投诉失效'
            ],
            correct: 0,
            explanation: '激励执行中需避免的问题是规则不透明、执行不一致。'
        },
        {
            id: 34,
            question: '激励兑现的核心是？',
            options: [
                '按规则及时发放奖励',
                '财务审核',
                '招聘完成',
                '投诉结束'
            ],
            correct: 0,
            explanation: '激励兑现的核心是按规则及时发放奖励。'
        },
        {
            id: 35,
            question: '激励执行中的公平性体现在？',
            options: [
                '同岗同责同标准',
                '财务对账',
                '招聘标准',
                '投诉标准'
            ],
            correct: 0,
            explanation: '激励执行中的公平性体现在同岗同责同标准。'
        },
        {
            id: 36,
            question: '激励执行的最终落脚点是？',
            options: [
                '提升团队业绩与稳定性',
                '投诉减少',
                '财务准确',
                '招聘顺利'
            ],
            correct: 0,
            explanation: '激励执行的最终落脚点是提升团队业绩与稳定性。'
        },
        {
            id: 37,
            question: '激励执行阶段的复盘频率是？',
            options: [
                '月度、季度',
                '半年度',
                '年度',
                '任意'
            ],
            correct: 0,
            explanation: '激励执行阶段的复盘频率是月度、季度。'
        },
        {
            id: 38,
            question: '激励执行的责任主体是？',
            options: [
                'SM与区域运营',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '激励执行的责任主体是SM与区域运营。'
        },
        {
            id: 39,
            question: '激励执行阶段的风险是？',
            options: [
                '激励兑现不及时或标准失衡',
                '财务差错',
                '招聘不足',
                '投诉积压'
            ],
            correct: 0,
            explanation: '激励执行阶段的风险是激励兑现不及时或标准失衡。'
        },
        {
            id: 40,
            question: '激励执行的成功标志是？',
            options: [
                '团队积极性高、业绩达成度高',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '激励执行的成功标志是团队积极性高、业绩达成度高。'
        },
        {
            id: 41,
            question: '激励复盘的核心是？',
            options: [
                '数据对比与问题识别',
                '财务结算',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '激励复盘的核心是数据对比与问题识别。'
        },
        {
            id: 42,
            question: '激励复盘的关键指标是？',
            options: [
                '目标完成率与奖励兑现率',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '激励复盘的关键指标是目标完成率与奖励兑现率。'
        },
        {
            id: 43,
            question: '激励复盘需重点分析？',
            options: [
                '激励有效性与公平性',
                '财务准确性',
                '招聘效率',
                '投诉处理效率'
            ],
            correct: 0,
            explanation: '激励复盘需重点分析激励有效性与公平性。'
        },
        {
            id: 44,
            question: '激励复盘的责任人是？',
            options: [
                '区域运营与SM',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '激励复盘的责任人是区域运营与SM。'
        },
        {
            id: 45,
            question: '激励复盘的最佳时间是？',
            options: [
                '激励周期结束后立即',
                '季度末',
                '半年度',
                '年度'
            ],
            correct: 0,
            explanation: '激励复盘的最佳时间是激励周期结束后立即。'
        },
        {
            id: 46,
            question: '激励复盘的成果是？',
            options: [
                '激励复盘报告与优化方案',
                '财务报表',
                '招聘清单',
                '投诉报告'
            ],
            correct: 0,
            explanation: '激励复盘的成果是激励复盘报告与优化方案。'
        },
        {
            id: 47,
            question: '激励优化的核心是？',
            options: [
                '不断迭代激励方案',
                '财务调整',
                '招聘调整',
                '投诉调整'
            ],
            correct: 0,
            explanation: '激励优化的核心是不断迭代激励方案。'
        },
        {
            id: 48,
            question: '激励优化需避免的问题是？',
            options: [
                '方案空洞、不落地',
                '财务出错',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '激励优化需避免的问题是方案空洞、不落地。'
        },
        {
            id: 49,
            question: '激励优化的最终标准是？',
            options: [
                '激励效果是否持续提升',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '激励优化的最终标准是激励效果是否持续提升。'
        },
        {
            id: 50,
            question: '激励管理的最终目标是？',
            options: [
                '驱动业绩提升与团队积极性',
                '提高退费率',
                '提高投诉率',
                '增加财务负担'
            ],
            correct: 0,
            explanation: '激励管理的最终目标是驱动业绩提升与团队积极性。'
        }
    ],
    9: [
        {
            id: 1,
            question: '新建组 SOP 的主要目标是？',
            options: [
                '确保团队快速成型并进入业绩状态',
                '提高投诉率',
                '增加财务成本',
                '提高退费率'
            ],
            correct: 0,
            explanation: '新建组 SOP 的主要目标是确保团队快速成型并进入业绩状态。'
        },
        {
            id: 2,
            question: '新建组 SOP 的第一步是？',
            options: [
                '团队组建与角色分工',
                '财务核算',
                '招聘管理',
                '投诉处理'
            ],
            correct: 0,
            explanation: '新建组 SOP 的第一步是团队组建与角色分工。'
        },
        {
            id: 3,
            question: '新建组 SOP 的执行主体是？',
            options: [
                'SM与区域运营',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '新建组 SOP 的执行主体是SM与区域运营。'
        },
        {
            id: 4,
            question: '新建组 SOP 中的核心要素是？',
            options: [
                '人员配置、流程规范、目标分解',
                '财务结算',
                '招聘流程',
                '投诉流程'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的核心要素是人员配置、流程规范、目标分解。'
        },
        {
            id: 5,
            question: '新建组 SOP 的最终落脚点是？',
            options: [
                '业绩达成与团队稳定',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '新建组 SOP 的最终落脚点是业绩达成与团队稳定。'
        },
        {
            id: 6,
            question: '新建组 SOP 的关键原则是？',
            options: [
                '标准化、流程化、落地性',
                '财务优先',
                '投诉优先',
                '招聘优先'
            ],
            correct: 0,
            explanation: '新建组 SOP 的关键原则是标准化、流程化、落地性。'
        },
        {
            id: 7,
            question: '新建组 SOP 的周期通常是？',
            options: [
                '1-3个月',
                '半年',
                '一年',
                '不固定'
            ],
            correct: 0,
            explanation: '新建组 SOP 的周期通常是1-3个月。'
        },
        {
            id: 8,
            question: '新建组 SOP 中，SM的作用是？',
            options: [
                '制定计划、过程把控、目标分解',
                '财务结算',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '新建组 SOP 中，SM的作用是制定计划、过程把控、目标分解。'
        },
        {
            id: 9,
            question: '新建组 SOP 中，区域运营的支持是？',
            options: [
                '提供数据支持与培训资源',
                '财务对账',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '新建组 SOP 中，区域运营的支持是提供数据支持与培训资源。'
        },
        {
            id: 10,
            question: '新建组 SOP 的直接作用是？',
            options: [
                '确保团队快速进入正轨',
                '增加投诉',
                '提高退费',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '新建组 SOP 的直接作用是确保团队快速进入正轨。'
        },
        {
            id: 11,
            question: '新建组的首要任务是？',
            options: [
                '确定团队成员与分工',
                '财务结算',
                '招聘',
                '投诉处理'
            ],
            correct: 0,
            explanation: '新建组的首要任务是确定团队成员与分工。'
        },
        {
            id: 12,
            question: '新建组 SOP 中的人员配置要求是？',
            options: [
                'SS与LP合理搭配',
                '财务搭配',
                '招聘搭配',
                '投诉搭配'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的人员配置要求是SS与LP合理搭配。'
        },
        {
            id: 13,
            question: '新建组 SOP 中的工作流程需？',
            options: [
                '明确标准化、易复制',
                '财务优先',
                '招聘优先',
                '投诉优先'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的工作流程需明确标准化、易复制。'
        },
        {
            id: 14,
            question: '新建组 SOP 中的目标分解需落实到？',
            options: [
                '每个团队成员',
                '财务人员',
                '招聘人员',
                '投诉人员'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的目标分解需落实到每个团队成员。'
        },
        {
            id: 15,
            question: '新建组 SOP 的执行中常见问题是？',
            options: [
                '目标不清晰、流程不规范',
                '财务不准确',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '新建组 SOP 的执行中常见问题是目标不清晰、流程不规范。'
        },
        {
            id: 16,
            question: '新建组 SOP 的关键保障是？',
            options: [
                '培训与辅导机制',
                '财务支持',
                '招聘支持',
                '投诉支持'
            ],
            correct: 0,
            explanation: '新建组 SOP 的关键保障是培训与辅导机制。'
        },
        {
            id: 17,
            question: '新建组 SOP 中，SM的日常动作包括？',
            options: [
                '晨会、日报、周目标跟进',
                '财务核算',
                '招聘动员',
                '投诉处理'
            ],
            correct: 0,
            explanation: '新建组 SOP 中，SM的日常动作包括晨会、日报、周目标跟进。'
        },
        {
            id: 18,
            question: '新建组 SOP 中，团队协作的关键是？',
            options: [
                'SS与LP的双人配合',
                '财务配合',
                '招聘配合',
                '投诉配合'
            ],
            correct: 0,
            explanation: '新建组 SOP 中，团队协作的关键是SS与LP的双人配合。'
        },
        {
            id: 19,
            question: '新建组 SOP 中的"快速起盘"指的是？',
            options: [
                '团队在短期内形成业绩产出',
                '财务快速对账',
                '招聘快速完成',
                '投诉快速解决'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的"快速起盘"指的是团队在短期内形成业绩产出。'
        },
        {
            id: 20,
            question: '新建组 SOP 中的绩效考核重点是？',
            options: [
                '续费率与课耗率',
                '投诉率',
                '财务准确率',
                '招聘率'
            ],
            correct: 0,
            explanation: '新建组 SOP 中的绩效考核重点是续费率与课耗率。'
        },
        {
            id: 21,
            question: '新建组 SOP 的落地需要谁牵头？',
            options: [
                'SM',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '新建组 SOP 的落地需要SM牵头。'
        },
        {
            id: 22,
            question: '新建组 SOP 的风险是？',
            options: [
                '流程不清、人员不稳',
                '财务出错',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '新建组 SOP 的风险是流程不清、人员不稳。'
        },
        {
            id: 23,
            question: '新建组 SOP 的考核周期通常是？',
            options: [
                '月度、季度',
                '半年度',
                '年度',
                '任意'
            ],
            correct: 0,
            explanation: '新建组 SOP 的考核周期通常是月度、季度。'
        },
        {
            id: 24,
            question: '新建组 SOP 的核心保障机制是？',
            options: [
                '培训与监督',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '新建组 SOP 的核心保障机制是培训与监督。'
        },
        {
            id: 25,
            question: '新建组 SOP 的成功标志是？',
            options: [
                '团队稳定并达成目标',
                '投诉减少',
                '财务准确',
                '招聘完成'
            ],
            correct: 0,
            explanation: '新建组 SOP 的成功标志是团队稳定并达成目标。'
        },
        {
            id: 26,
            question: '会议管理的核心目标是？',
            options: [
                '提高团队沟通效率与执行力',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '会议管理的核心目标是提高团队沟通效率与执行力。'
        },
        {
            id: 27,
            question: '会议管理的基本原则是？',
            options: [
                '有目标、有议程、有复盘',
                '财务优先',
                '招聘优先',
                '投诉优先'
            ],
            correct: 0,
            explanation: '会议管理的基本原则是有目标、有议程、有复盘。'
        },
        {
            id: 28,
            question: '会议管理中的会议类型不包括？',
            options: [
                '晨会',
                '周会',
                '招聘面试',
                '月会'
            ],
            correct: 2,
            explanation: '会议管理中的会议类型不包括招聘面试。'
        },
        {
            id: 29,
            question: '晨会的主要作用是？',
            options: [
                '明确当日目标与复盘前一日情况',
                '财务结算',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '晨会的主要作用是明确当日目标与复盘前一日情况。'
        },
        {
            id: 30,
            question: '周会的主要作用是？',
            options: [
                '复盘一周目标完成情况',
                '财务对账',
                '招聘总结',
                '投诉汇报'
            ],
            correct: 0,
            explanation: '周会的主要作用是复盘一周目标完成情况。'
        },
        {
            id: 31,
            question: '月会的主要作用是？',
            options: [
                '阶段性复盘与下阶段目标制定',
                '财务总结',
                '招聘总结',
                '投诉总结'
            ],
            correct: 0,
            explanation: '月会的主要作用是阶段性复盘与下阶段目标制定。'
        },
        {
            id: 32,
            question: '会议管理中，SM的责任是？',
            options: [
                '主持会议、明确目标、跟进执行',
                '财务结算',
                '招聘管理',
                '投诉处理'
            ],
            correct: 0,
            explanation: '会议管理中，SM的责任是主持会议、明确目标、跟进执行。'
        },
        {
            id: 33,
            question: '会议管理中，会议纪要的作用是？',
            options: [
                '固化内容、明确责任人',
                '财务对账',
                '招聘确认',
                '投诉记录'
            ],
            correct: 0,
            explanation: '会议管理中，会议纪要的作用是固化内容、明确责任人。'
        },
        {
            id: 34,
            question: '会议管理中的常见问题是？',
            options: [
                '议程不清、执行不落地',
                '财务错误',
                '招聘不足',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '会议管理中的常见问题是议程不清、执行不落地。'
        },
        {
            id: 35,
            question: '晨会通常时长是？',
            options: [
                '15-30分钟',
                '1小时',
                '半天',
                '一天'
            ],
            correct: 0,
            explanation: '晨会通常时长是15-30分钟。'
        },
        {
            id: 36,
            question: '周会通常时长是？',
            options: [
                '30-60分钟',
                '10分钟',
                '半天',
                '一天'
            ],
            correct: 0,
            explanation: '周会通常时长是30-60分钟。'
        },
        {
            id: 37,
            question: '月会通常时长是？',
            options: [
                '1-2小时',
                '10分钟',
                '半天',
                '一天'
            ],
            correct: 0,
            explanation: '月会通常时长是1-2小时。'
        },
        {
            id: 38,
            question: '会议管理中需避免的问题是？',
            options: [
                '会议冗长、缺乏结论',
                '财务失误',
                '招聘延迟',
                '投诉增加'
            ],
            correct: 0,
            explanation: '会议管理中需避免的问题是会议冗长、缺乏结论。'
        },
        {
            id: 39,
            question: '会议复盘的作用是？',
            options: [
                '检查落实情况，发现问题',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '会议复盘的作用是检查落实情况，发现问题。'
        },
        {
            id: 40,
            question: '会议管理中的过程监督人是？',
            options: [
                'SM或指定责任人',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '会议管理中的过程监督人是SM或指定责任人。'
        },
        {
            id: 41,
            question: '晨会的频率是？',
            options: [
                '每天',
                '每周',
                '每月',
                '每季度'
            ],
            correct: 0,
            explanation: '晨会的频率是每天。'
        },
        {
            id: 42,
            question: '周会的频率是？',
            options: [
                '每周一次',
                '每天',
                '每月',
                '每季度'
            ],
            correct: 0,
            explanation: '周会的频率是每周一次。'
        },
        {
            id: 43,
            question: '月会的频率是？',
            options: [
                '每月一次',
                '每周一次',
                '每天',
                '每季度'
            ],
            correct: 0,
            explanation: '月会的频率是每月一次。'
        },
        {
            id: 44,
            question: '会议管理的关键工具是？',
            options: [
                '会议纪要与行动清单',
                '财务报表',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '会议管理的关键工具是会议纪要与行动清单。'
        },
        {
            id: 45,
            question: '会议管理的最终落脚点是？',
            options: [
                '推动目标达成与团队执行力',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '会议管理的最终落脚点是推动目标达成与团队执行力。'
        },
        {
            id: 46,
            question: '新建组 SOP 的复盘核心是？',
            options: [
                '总结执行问题并优化流程',
                '财务总结',
                '招聘总结',
                '投诉总结'
            ],
            correct: 0,
            explanation: '新建组 SOP 的复盘核心是总结执行问题并优化流程。'
        },
        {
            id: 47,
            question: '新建组 SOP 的优化责任人是？',
            options: [
                'SM与区域运营',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '新建组 SOP 的优化责任人是SM与区域运营。'
        },
        {
            id: 48,
            question: '会议管理的改进核心是？',
            options: [
                '提高效率与结果导向',
                '财务调整',
                '招聘调整',
                '投诉调整'
            ],
            correct: 0,
            explanation: '会议管理的改进核心是提高效率与结果导向。'
        },
        {
            id: 49,
            question: '新建组 SOP 的优化最终标准是？',
            options: [
                '团队能快速成型并达标',
                '投诉减少',
                '财务准确',
                '招聘顺利'
            ],
            correct: 0,
            explanation: '新建组 SOP 的优化最终标准是团队能快速成型并达标。'
        },
        {
            id: 50,
            question: '新建组 SOP & 会议管理的最终目标是？',
            options: [
                '确保团队高效协作与业绩达成',
                '提高投诉率',
                '提高退费率',
                '增加财务负担'
            ],
            correct: 0,
            explanation: '新建组 SOP & 会议管理的最终目标是确保团队高效协作与业绩达成。'
        }
    ],
    10: [
        {
            id: 1,
            question: '数据看板的核心作用是？',
            options: [
                '提供业务实时数据监控与决策支持',
                '招聘管理',
                '财务结算',
                '投诉处理'
            ],
            correct: 0,
            explanation: '数据看板的核心作用是提供业务实时数据监控与决策支持。'
        },
        {
            id: 2,
            question: '数据看板的主要使用人群是？',
            options: [
                'SM、区域运营、一线SS/LP',
                '财务人员',
                '招聘人员',
                '投诉人员'
            ],
            correct: 0,
            explanation: '数据看板的主要使用人群是SM、区域运营、一线SS/LP。'
        },
        {
            id: 3,
            question: '数据看板中的核心指标是？',
            options: [
                '围场人数、转率、课耗、续费率',
                '招聘人数',
                '财务报表',
                '投诉数量'
            ],
            correct: 0,
            explanation: '数据看板中的核心指标是围场人数、转率、课耗、续费率。'
        },
        {
            id: 4,
            question: '数据看板的设计原则是？',
            options: [
                '简洁、直观、实时',
                '复杂、繁琐、延迟',
                '招聘优先',
                '财务优先'
            ],
            correct: 0,
            explanation: '数据看板的设计原则是简洁、直观、实时。'
        },
        {
            id: 5,
            question: '数据看板的直接作用是？',
            options: [
                '让管理者随时掌握业务动态',
                '提高退费率',
                '增加投诉',
                '提高财务成本'
            ],
            correct: 0,
            explanation: '数据看板的直接作用是让管理者随时掌握业务动态。'
        },
        {
            id: 6,
            question: '数据看板的更新频率通常是？',
            options: [
                '实时或日更',
                '半年度',
                '年度',
                '不固定'
            ],
            correct: 0,
            explanation: '数据看板的更新频率通常是实时或日更。'
        },
        {
            id: 7,
            question: '数据看板的本质是？',
            options: [
                '数据可视化与业务监控工具',
                '招聘工具',
                '投诉工具',
                '财务工具'
            ],
            correct: 0,
            explanation: '数据看板的本质是数据可视化与业务监控工具。'
        },
        {
            id: 8,
            question: '数据看板的最终目标是？',
            options: [
                '辅助业务决策与提升绩效',
                '提高退费率',
                '提高投诉率',
                '增加财务负担'
            ],
            correct: 0,
            explanation: '数据看板的最终目标是辅助业务决策与提升绩效。'
        },
        {
            id: 9,
            question: '数据看板的落地需要谁配合？',
            options: [
                '中台、区域运营与一线',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '数据看板的落地需要中台、区域运营与一线配合。'
        },
        {
            id: 10,
            question: '数据看板的关键保障是？',
            options: [
                '数据准确性与时效性',
                '财务准确',
                '招聘及时',
                '投诉减少'
            ],
            correct: 0,
            explanation: '数据看板的关键保障是数据准确性与时效性。'
        },
        {
            id: 11,
            question: '围场人数指标反映的是？',
            options: [
                '当前学员覆盖面',
                '投诉数量',
                '财务成本',
                '招聘效率'
            ],
            correct: 0,
            explanation: '围场人数指标反映的是当前学员覆盖面。'
        },
        {
            id: 12,
            question: '转率指标反映的是？',
            options: [
                '从潜在到实际续费的比例',
                '招聘成功率',
                '投诉率',
                '财务结算率'
            ],
            correct: 0,
            explanation: '转率指标反映的是从潜在到实际续费的比例。'
        },
        {
            id: 13,
            question: '课耗指标反映的是？',
            options: [
                '学员学习活跃度与课程消耗情况',
                '财务支出',
                '招聘数量',
                '投诉数量'
            ],
            correct: 0,
            explanation: '课耗指标反映的是学员学习活跃度与课程消耗情况。'
        },
        {
            id: 14,
            question: '续费率指标反映的是？',
            options: [
                '学员复购率',
                '财务报表',
                '投诉数量',
                '招聘比例'
            ],
            correct: 0,
            explanation: '续费率指标反映的是学员复购率。'
        },
        {
            id: 15,
            question: '数据看板中，常见的过程指标是？',
            options: [
                '覆盖率、触达率、课耗率',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板中，常见的过程指标是覆盖率、触达率、课耗率。'
        },
        {
            id: 16,
            question: '数据看板中，常见的结果指标是？',
            options: [
                '续费率、转介绍率、升舱率',
                '财务准确率',
                '招聘完成率',
                '投诉率'
            ],
            correct: 0,
            explanation: '数据看板中，常见的结果指标是续费率、转介绍率、升舱率。'
        },
        {
            id: 17,
            question: '数据看板的指标通常分为？',
            options: [
                '过程指标与结果指标',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板的指标通常分为过程指标与结果指标。'
        },
        {
            id: 18,
            question: '数据看板中，SS重点关注？',
            options: [
                '续费率与转率',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板中，SS重点关注续费率与转率。'
        },
        {
            id: 19,
            question: '数据看板中，LP重点关注？',
            options: [
                '课耗与学员覆盖率',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板中，LP重点关注课耗与学员覆盖率。'
        },
        {
            id: 20,
            question: '数据看板中，SM重点关注？',
            options: [
                '团队整体目标完成度',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板中，SM重点关注团队整体目标完成度。'
        },
        {
            id: 21,
            question: '数据看板中，区域运营重点关注？',
            options: [
                '区域整体指标与差异化表现',
                '财务指标',
                '招聘指标',
                '投诉指标'
            ],
            correct: 0,
            explanation: '数据看板中，区域运营重点关注区域整体指标与差异化表现。'
        },
        {
            id: 22,
            question: '数据看板中，过程指标的意义是？',
            options: [
                '监控过程动作，驱动结果达成',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '数据看板中，过程指标的意义是监控过程动作，驱动结果达成。'
        },
        {
            id: 23,
            question: '数据看板中，结果指标的意义是？',
            options: [
                '体现最终业务成效',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '数据看板中，结果指标的意义是体现最终业务成效。'
        },
        {
            id: 24,
            question: '数据看板中的数据来源主要是？',
            options: [
                '系统自动采集与人工录入',
                '财务报表',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '数据看板中的数据来源主要是系统自动采集与人工录入。'
        },
        {
            id: 25,
            question: '数据看板的指标需满足？',
            options: [
                '可量化、可追踪、可比较',
                '投诉减少',
                '招聘顺利',
                '财务准确'
            ],
            correct: 0,
            explanation: '数据看板的指标需满足可量化、可追踪、可比较。'
        },
        {
            id: 26,
            question: '数据看板在日常管理中的应用是？',
            options: [
                '监控团队执行进度',
                '财务结算',
                '招聘安排',
                '投诉处理'
            ],
            correct: 0,
            explanation: '数据看板在日常管理中的应用是监控团队执行进度。'
        },
        {
            id: 27,
            question: '数据看板在促销活动中的应用是？',
            options: [
                '追踪实时目标完成情况',
                '财务对账',
                '招聘对比',
                '投诉对比'
            ],
            correct: 0,
            explanation: '数据看板在促销活动中的应用是追踪实时目标完成情况。'
        },
        {
            id: 28,
            question: '数据看板在会议管理中的应用是？',
            options: [
                '提供实时数据支撑决策',
                '财务汇报',
                '招聘汇报',
                '投诉汇报'
            ],
            correct: 0,
            explanation: '数据看板在会议管理中的应用是提供实时数据支撑决策。'
        },
        {
            id: 29,
            question: '数据看板在新建组 SOP 中的作用是？',
            options: [
                '快速识别问题并调整动作',
                '财务快速核算',
                '招聘快速完成',
                '投诉快速处理'
            ],
            correct: 0,
            explanation: '数据看板在新建组 SOP 中的作用是快速识别问题并调整动作。'
        },
        {
            id: 30,
            question: '数据看板在激励管理中的应用是？',
            options: [
                '提供过程与结果考核数据',
                '财务结算',
                '招聘分析',
                '投诉分析'
            ],
            correct: 0,
            explanation: '数据看板在激励管理中的应用是提供过程与结果考核数据。'
        },
        {
            id: 31,
            question: '数据看板在绩效管理中的作用是？',
            options: [
                '提供核心指标支撑绩效考核',
                '财务报表',
                '招聘统计',
                '投诉统计'
            ],
            correct: 0,
            explanation: '数据看板在绩效管理中的作用是提供核心指标支撑绩效考核。'
        },
        {
            id: 32,
            question: '数据看板能帮助SM发现什么？',
            options: [
                '团队短板与改进点',
                '财务差错',
                '招聘差错',
                '投诉差错'
            ],
            correct: 0,
            explanation: '数据看板能帮助SM发现团队短板与改进点。'
        },
        {
            id: 33,
            question: '数据看板能帮助区域运营做什么？',
            options: [
                '制定差异化策略',
                '财务核算',
                '招聘管理',
                '投诉管理'
            ],
            correct: 0,
            explanation: '数据看板能帮助区域运营制定差异化策略。'
        },
        {
            id: 34,
            question: '数据看板能帮助SS/LP做什么？',
            options: [
                '明确自身目标与差距',
                '财务管理',
                '招聘安排',
                '投诉管理'
            ],
            correct: 0,
            explanation: '数据看板能帮助SS/LP明确自身目标与差距。'
        },
        {
            id: 35,
            question: '数据看板在运营定位中的价值是？',
            options: [
                '提供目标拆解与执行跟进依据',
                '财务定位',
                '招聘定位',
                '投诉定位'
            ],
            correct: 0,
            explanation: '数据看板在运营定位中的价值是提供目标拆解与执行跟进依据。'
        },
        {
            id: 36,
            question: '数据看板在PDCA中的应用是？',
            options: [
                '支撑计划、执行、检查、改进',
                '财务循环',
                '招聘循环',
                '投诉循环'
            ],
            correct: 0,
            explanation: '数据看板在PDCA中的应用是支撑计划、执行、检查、改进。'
        },
        {
            id: 37,
            question: '数据看板的直观优势是？',
            options: [
                '可视化与实时监控',
                '财务稳定',
                '招聘稳定',
                '投诉稳定'
            ],
            correct: 0,
            explanation: '数据看板的直观优势是可视化与实时监控。'
        },
        {
            id: 38,
            question: '数据看板在风险管理中的作用是？',
            options: [
                '提前预警异常指标',
                '财务风险预警',
                '招聘风险预警',
                '投诉风险预警'
            ],
            correct: 0,
            explanation: '数据看板在风险管理中的作用是提前预警异常指标。'
        },
        {
            id: 39,
            question: '数据看板在复盘中的价值是？',
            options: [
                '提供客观数据支撑分析',
                '财务复盘',
                '招聘复盘',
                '投诉复盘'
            ],
            correct: 0,
            explanation: '数据看板在复盘中的价值是提供客观数据支撑分析。'
        },
        {
            id: 40,
            question: '数据看板在目标拆解中的作用是？',
            options: [
                '明确分层目标与执行节奏',
                '财务拆解',
                '招聘拆解',
                '投诉拆解'
            ],
            correct: 0,
            explanation: '数据看板在目标拆解中的作用是明确分层目标与执行节奏。'
        },
        {
            id: 41,
            question: '数据看板优化的核心是？',
            options: [
                '指标合理性与展示友好度',
                '财务准确性',
                '招聘准确性',
                '投诉准确性'
            ],
            correct: 0,
            explanation: '数据看板优化的核心是指标合理性与展示友好度。'
        },
        {
            id: 42,
            question: '数据看板优化需避免的问题是？',
            options: [
                '数据冗余、指标失真',
                '财务错误',
                '招聘延迟',
                '投诉延迟'
            ],
            correct: 0,
            explanation: '数据看板优化需避免的问题是数据冗余、指标失真。'
        },
        {
            id: 43,
            question: '数据看板迭代的触发点是？',
            options: [
                '业务需求变化或指标不匹配',
                '财务结算',
                '招聘变化',
                '投诉变化'
            ],
            correct: 0,
            explanation: '数据看板迭代的触发点是业务需求变化或指标不匹配。'
        },
        {
            id: 44,
            question: '数据看板优化的责任人是？',
            options: [
                '中台与区域运营',
                '财务',
                '招聘',
                '投诉'
            ],
            correct: 0,
            explanation: '数据看板优化的责任人是中台与区域运营。'
        },
        {
            id: 45,
            question: '数据看板优化的工具是？',
            options: [
                '数据分析与反馈机制',
                '财务报表',
                '招聘系统',
                '投诉系统'
            ],
            correct: 0,
            explanation: '数据看板优化的工具是数据分析与反馈机制。'
        },
        {
            id: 46,
            question: '数据看板优化的最终目标是？',
            options: [
                '更好支撑业务决策与执行',
                '财务优化',
                '招聘优化',
                '投诉优化'
            ],
            correct: 0,
            explanation: '数据看板优化的最终目标是更好支撑业务决策与执行。'
        },
        {
            id: 47,
            question: '数据看板优化需结合？',
            options: [
                '一线反馈与实际业务场景',
                '财务差错',
                '招聘差错',
                '投诉差错'
            ],
            correct: 0,
            explanation: '数据看板优化需结合一线反馈与实际业务场景。'
        },
        {
            id: 48,
            question: '数据看板优化的评判标准是？',
            options: [
                '使用便捷、指标准确、价值高',
                '财务准确',
                '招聘顺利',
                '投诉减少'
            ],
            correct: 0,
            explanation: '数据看板优化的评判标准是使用便捷、指标准确、价值高。'
        },
        {
            id: 49,
            question: '数据看板优化的周期通常是？',
            options: [
                '月度或季度',
                '半年度',
                '年度',
                '任意'
            ],
            correct: 0,
            explanation: '数据看板优化的周期通常是月度或季度。'
        },
        {
            id: 50,
            question: '数据看板管理的最终目标是？',
            options: [
                '驱动业绩提升与团队协作效率',
                '提高退费率',
                '提高投诉率',
                '增加财务成本'
            ],
            correct: 0,
            explanation: '数据看板管理的最终目标是驱动业绩提升与团队协作效率。'
        }
    ]
};

// 测验管理器
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.questionsPerPage = 10;
        this.currentPage = 1;
        this.currentCourseId = this.getCurrentCourseId();
        this.init();
    }

    // 获取当前课程ID
    getCurrentCourseId() {
        // 1. 从URL参数获取
        const urlParams = new URLSearchParams(window.location.search);
        let courseId = urlParams.get('courseId');

        if (courseId) {
            return courseId;
        }

        // 2. 从localStorage获取之前学习的课程
        const currentCourse = localStorage.getItem('currentLearningCourse');
        if (currentCourse && currentCourse !== 'null') {
            // 移除course前缀，只保留数字
            const courseMatch = currentCourse.match(/course(\d+)/);
            if (courseMatch) {
                return courseMatch[1];
            }
        }

        // 3. 默认返回第一个课程
        return '1';
    }

    init() {
        const courseSelector = document.getElementById('course-selector');
        if (courseSelector) {
            courseSelector.addEventListener('change', (e) => {
                const courseId = e.target.value;
                if (courseId) {
                    this.loadQuiz(courseId);
                } else {
                    this.clearQuiz();
                }
            });
        }
    }

    loadQuiz(courseId) {
        this.currentQuiz = quizData[courseId];
        this.userAnswers = [];
        this.currentQuestionIndex = 0;

        // 记录测验开始时间
        this.quizStartTime = Date.now();

        console.log('开始测验课程:', courseId, '题目数量:', this.currentQuiz ? this.currentQuiz.length : 0);
        
        if (!this.currentQuiz || this.currentQuiz.length === 0) {
            this.showError('该课程暂无测验题目');
            return;
        }

        this.renderQuiz();
    }

    renderQuiz() {
        const container = document.getElementById('quiz-container');
        const progressText = document.getElementById('current-question');
        const progressFill = document.getElementById('progress-fill');
        const currentPageSpan = document.getElementById('current-page');
        const prevPageBtn = document.getElementById('prev-page');
        const nextPageBtn = document.getElementById('next-page');

        if (!container) return;

        // 计算当前页的题目范围
        const startIndex = (this.currentPage - 1) * this.questionsPerPage;
        const endIndex = Math.min(startIndex + this.questionsPerPage, this.currentQuiz.length);
        const pageQuestions = this.currentQuiz.slice(startIndex, endIndex);

        // 更新进度显示
        if (progressText) progressText.textContent = endIndex;
        if (progressFill) progressFill.style.width = `${(endIndex / this.currentQuiz.length) * 100}%`;
        if (currentPageSpan) currentPageSpan.textContent = this.currentPage;

        // 更新导航按钮状态
        if (prevPageBtn) prevPageBtn.disabled = this.currentPage === 1;
        if (nextPageBtn) nextPageBtn.disabled = endIndex >= this.currentQuiz.length;

        // 渲染当前页的所有题目
        container.innerHTML = pageQuestions.map((question, index) => {
            const questionNumber = startIndex + index + 1;
            const userAnswer = this.userAnswers[startIndex + index];
            return `
                <div class="quiz-question ${userAnswer !== undefined ? 'selected' : ''}" id="question-${questionNumber}">
                    <div class="question-number">第 ${questionNumber} 题</div>
                    <div class="question-text">${question.question}</div>
                    <div class="options-list">
                        ${question.options.map((option, optionIndex) => `
                            <div class="option-item">
                                <label>
                                    <input type="radio" 
                                        name="question-${questionNumber}" 
                                        value="${optionIndex}"
                                        ${userAnswer === optionIndex ? 'checked' : ''}
                                    >
                                    <span>${option}</span>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        if (endIndex >= this.currentQuiz.length) {
            container.innerHTML += `
                <button class="submit-quiz" id="submit-quiz">提交测验</button>
            `;
        }

        this.bindEvents();
    }

    bindEvents() {
        const prevPageBtn = document.getElementById('prev-page');
        const nextPageBtn = document.getElementById('next-page');
        const submitBtn = document.getElementById('submit-quiz');
        const options = document.querySelectorAll('input[type="radio"]');

        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', () => this.previousPage());
        }

        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', () => this.nextPage());
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitQuiz());
        }

        options.forEach(option => {
            option.addEventListener('change', (e) => {
                const questionNumber = parseInt(e.target.name.split('-')[1]) - 1;
                this.recordAnswer(questionNumber, parseInt(e.target.value));
                
                // 高亮选中的题目卡片
                const questionCard = document.getElementById(`question-${questionNumber + 1}`);
                if (questionCard) {
                    questionCard.classList.add('selected');
                }
            });
        });
    }

    recordAnswer(questionIndex, answerIndex) {
        this.userAnswers[questionIndex] = answerIndex;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderQuiz();
            window.scrollTo(0, 0);
        }
    }

    nextPage() {
        const startIndex = (this.currentPage - 1) * this.questionsPerPage;
        const endIndex = Math.min(startIndex + this.questionsPerPage, this.currentQuiz.length);
        
        // 允许用户在不回答所有题目的情况下翻页
        if (endIndex < this.currentQuiz.length) {
            this.currentPage++;
            this.renderQuiz();
            window.scrollTo(0, 0);
        }
    }

    submitQuiz() {
        let correctCount = 0;
        const results = this.currentQuiz.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer !== undefined && userAnswer === question.correct;
            if (isCorrect) correctCount++;
            return {
                question: question.question,
                userAnswer: userAnswer !== undefined ? question.options[userAnswer] : '未回答',
                correctAnswer: question.options[question.correct],
                isCorrect: isCorrect,
                explanation: question.explanation
            };
        });

        this.showResults(results, correctCount);
    }

    showResults(results, correctCount) {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        const score = Math.round((correctCount / this.currentQuiz.length) * 100);
        const wrongAnswers = results.filter(result => !result.isCorrect);
        const incorrectCount = this.currentQuiz.length - correctCount; // 包含错误和未回答的题目
        
        // 根据分数生成评语
        let feedback = '';
        if (score >= 80) {
            feedback = '很好！继续加油！';
        } else if (score >= 60) {
            feedback = '再接再厉！';
        } else {
            feedback = '请再次回顾课程内容';
        }
        
        container.innerHTML = `
            <div class="quiz-results-modern">
                <!-- 顶部标题 -->
                <div class="results-header">
                    <h1 class="results-title">测验结果</h1>
                </div>
                
                <!-- 核心结果展示 -->
                <div class="results-core">
                    <div class="score-display">
                        <div class="circular-progress" data-score="${score}">
                            <svg class="progress-ring" width="160" height="160">
                                <circle class="progress-ring-bg" cx="80" cy="80" r="70" fill="transparent" stroke="#e6e6e6" stroke-width="8"/>
                                <circle class="progress-ring-fill" cx="80" cy="80" r="70" fill="transparent" stroke="url(#gradient)" stroke-width="8" stroke-linecap="round" stroke-dasharray="439.82" stroke-dashoffset="439.82" style="transition: stroke-dashoffset 2s ease-in-out;"/>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="score-text">
                                <span class="score-number">${correctCount}</span>
                                <span class="score-divider">/</span>
                                <span class="score-total">${this.currentQuiz.length}</span>
                            </div>
                        </div>
                        <div class="score-info">
                            <div class="score-percentage">${score}分</div>
                            <div class="score-feedback">${feedback}</div>
                        </div>
                    </div>
                </div>
                
                <!-- 详细数据区 -->
                <div class="results-details">
                    <div class="stats-grid-two">
                        <div class="stat-card correct">
                            <div class="stat-icon">✅</div>
                            <div class="stat-value">${correctCount}</div>
                            <div class="stat-label">正确数</div>
                        </div>
                        <div class="stat-card incorrect">
                            <div class="stat-icon">❌</div>
                            <div class="stat-value">${incorrectCount}</div>
                            <div class="stat-label">错误数</div>
                        </div>
                    </div>
                </div>
                
                <!-- 错题回顾 -->
                ${wrongAnswers.length > 0 ? `
                <div class="wrong-answers-section">
                    <div class="section-header" onclick="toggleWrongAnswers()">
                        <h3>错题回顾 (${wrongAnswers.length}题)</h3>
                        <span class="toggle-icon" style="transform: rotate(180deg);">▲</span>
                    </div>
                    <div class="wrong-answers-list" id="wrongAnswersList">
                        ${wrongAnswers.map((result, index) => {
                            const questionIndex = results.findIndex(r => r === result) + 1;
                            return `
                            <div class="wrong-answer-item">
                                <div class="question-number">第 ${questionIndex} 题</div>
                                <div class="question-content">
                                    <div class="question-text">
                                        <strong>问题：</strong>${result.question}
                                    </div>
                                    <div class="answer-comparison">
                                        <div class="user-answer">
                                            <span class="label">你的答案：</span>
                                            <span class="answer incorrect-answer">${result.userAnswer}</span>
                                        </div>
                                        <div class="correct-answer">
                                            <span class="label">正确答案：</span>
                                            <span class="answer correct-answer">${result.correctAnswer}</span>
                                        </div>
                                    </div>
                                    <div class="explanation">
                                        <strong>解释：</strong>${result.explanation}
                                    </div>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- 操作按钮 -->
                <div class="results-actions">
                    <button class="action-btn primary" onclick="quizManager.restartQuiz()">
                        <span class="btn-icon">🔄</span>
                        重新测验
                    </button>
                    <button class="action-btn secondary" onclick="window.location.href='courses.html'">
                        <span class="btn-icon">📚</span>
                        返回课程
                    </button>
                </div>
            </div>
            
            <style>
            .quiz-results-modern {
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #333;
            }
            
            .results-header {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            .results-title {
                font-size: 2.5rem;
                font-weight: 700;
                color: white;
                margin: 0;
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            .results-core {
                background: white;
                border-radius: 20px;
                padding: 3rem 2rem;
                margin-bottom: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                text-align: center;
            }
            
            .score-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
            }
            
            .circular-progress {
                position: relative;
                display: inline-block;
            }
            
            .progress-ring {
                transform: rotate(-90deg);
                transition: all 2s ease-in-out;
            }
            
            .score-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                font-weight: 700;
                color: #333;
            }
            
            .score-divider {
                color: #999;
                margin: 0 0.2rem;
            }
            
            .score-info {
                text-align: center;
            }
            
            .score-percentage {
                font-size: 3rem;
                font-weight: 800;
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 0.5rem;
            }
            
            .score-feedback {
                font-size: 1.2rem;
                color: #666;
                font-weight: 500;
            }
            
            .results-details {
                background: white;
                border-radius: 20px;
                padding: 2rem;
                margin-bottom: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1.5rem;
            }
            
            .stats-grid-two {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                max-width: 600px;
                margin: 0 auto;
            }
            
            .stat-card {
                background: #f8f9fa;
                border-radius: 15px;
                padding: 1.5rem;
                text-align: center;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .stat-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }
            
            .stat-card.correct {
                background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            }
            
            .stat-card.incorrect {
                background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            }
            
            .stat-icon {
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }
            
            .stat-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: #333;
                margin-bottom: 0.5rem;
            }
            
            .stat-label {
                font-size: 1rem;
                color: #666;
                font-weight: 500;
            }
            
            .wrong-answers-section {
                background: white;
                border-radius: 20px;
                margin-bottom: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            
            .section-header {
                padding: 1.5rem 2rem;
                background: #f8f9fa;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: background 0.3s ease;
            }
            
            .section-header:hover {
                background: #e9ecef;
            }
            
            .section-header h3 {
                margin: 0;
                color: #333;
                font-size: 1.3rem;
            }
            
            .toggle-icon {
                font-size: 1.2rem;
                color: #666;
                transition: transform 0.3s ease;
            }
            
            .wrong-answers-list {
                transition: max-height 0.3s ease;
            }
            
            .wrong-answers-list.collapsed {
                max-height: 0;
                overflow: hidden;
            }
            
            .wrong-answer-item {
                padding: 1.5rem 2rem;
                border-bottom: 1px solid #eee;
            }
            
            .wrong-answer-item:last-child {
                border-bottom: none;
            }
            
            .question-number {
                font-weight: 600;
                color: #e74c3c;
                margin-bottom: 1rem;
                font-size: 1.1rem;
            }
            
            .question-text {
                margin-bottom: 1rem;
                font-size: 1rem;
                line-height: 1.6;
            }
            
            .answer-comparison {
                display: grid;
                gap: 0.8rem;
                margin-bottom: 1rem;
            }
            
            .user-answer, .correct-answer {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .label {
                font-weight: 600;
                min-width: 80px;
            }
            
            .answer {
                padding: 0.3rem 0.8rem;
                border-radius: 8px;
                font-weight: 500;
            }
            
            .incorrect-answer {
                background: #ffebee;
                color: #c62828;
            }
            
            .correct-answer {
                background: #e8f5e8;
                color: #2e7d32;
            }
            
            .explanation {
                background: #f0f7ff;
                padding: 1rem;
                border-radius: 8px;
                border-left: 4px solid #2196f3;
                font-size: 0.95rem;
                line-height: 1.5;
            }
            
            .results-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .action-btn {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                border: none;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
                min-width: 160px;
                justify-content: center;
            }
            
            .action-btn.primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            }
            
            .action-btn.primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
            }
            
            .action-btn.secondary {
                background: white;
                color: #333;
                border: 2px solid #ddd;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            
            .action-btn.secondary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                border-color: #bbb;
            }
            
            .btn-icon {
                font-size: 1.2rem;
            }
            
            @media (max-width: 768px) {
                .quiz-results-modern {
                    padding: 1rem;
                }
                
                .results-title {
                    font-size: 2rem;
                }
                
                .results-core {
                    padding: 2rem 1rem;
                }
                
                .score-percentage {
                    font-size: 2.5rem;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                }
                
                .results-actions {
                    flex-direction: column;
                }
                
                .action-btn {
                    width: 100%;
                }
            }
            </style>
        `;
        
        // 启动环形进度条动画
        setTimeout(() => {
            this.animateCircularProgress(score);
        }, 500);
        
        // 保存答题数据到localStorage
        this.saveQuizResult({
            courseId: this.currentCourseId,
            totalQuestions: this.currentQuiz.length,
            correctAnswers: correctCount,
            score: score,
            wrongAnswers: wrongAnswers.length,
            completedAt: new Date().toISOString(),
            results: results
        });
     }

    animateCircularProgress(score) {
        const circle = document.querySelector('.progress-ring-fill');
        if (!circle) return;
        
        const radius = 70;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 100) * circumference;
        
        circle.style.strokeDashoffset = offset;
    }
    
    saveQuizResult(resultData) {
        try {
            // 添加用户信息、时间戳和测验时间
            const completeResult = {
                ...resultData,
                userId: this.getCurrentUserId(),
                timestamp: Date.now(),
                timeSpent: this.getQuizTimeSpent()
            };

            // 保存到本地存储
            this.saveToLocalStorage(completeResult);

            // 同时保存到云端（如果用户已登录）
            this.saveToSupabase(completeResult);

            console.log('答题结果已保存:', completeResult);
        } catch (error) {
            console.error('保存答题结果失败:', error);
        }
    }

    // 保存到本地存储
    saveToLocalStorage(resultData) {
        let quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');

        if (!quizResults[resultData.courseId]) {
            quizResults[resultData.courseId] = [];
        }

        quizResults[resultData.courseId].unshift(resultData);

        // 每个课程最多保留10条记录
        if (quizResults[resultData.courseId].length > 10) {
            quizResults[resultData.courseId] = quizResults[resultData.courseId].slice(0, 10);
        }

        localStorage.setItem('quizResults', JSON.stringify(quizResults));
    }

    // 保存到Supabase云端
    async saveToSupabase(resultData) {
        try {
            if (window.dataManager && window.dataManager.auth.currentUser) {
                const quizData = {
                    courseId: resultData.courseId,
                    totalQuestions: resultData.totalQuestions,
                    correctAnswers: resultData.correctAnswers,
                    score: resultData.score,
                    timeSpent: resultData.timeSpent || 0
                };

                const result = await window.dataManager.saveQuizResult(quizData);
                if (result.success) {
                    console.log('答题结果已同步到云端:', result);
                } else {
                    console.error('云端同步失败:', result.error);
                }
            } else {
                console.log('用户未登录，数据仅保存在本地');
            }
        } catch (error) {
            console.error('保存到云端失败:', error);
        }
    }

    // 计算测验花费时间
    getQuizTimeSpent() {
        if (this.quizStartTime) {
            return Math.round((Date.now() - this.quizStartTime) / 1000); // 秒
        }
        return 0;
    }
    
    getCurrentUserId() {
        // 尝试从localStorage获取用户ID，如果没有则生成一个
        let userId = localStorage.getItem('currentUserId');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('currentUserId', userId);
        }
        return userId;
    }

    restartQuiz() {
        const courseSelector = document.getElementById('course-selector');
        if (courseSelector) {
            courseSelector.value = '';
        }
        this.clearQuiz();
    }

    clearQuiz() {
        const container = document.getElementById('quiz-container');
        if (container) {
            container.innerHTML = '<p class="quiz-placeholder">请选择课程开始测验</p>';
        }
    }

    showError(message) {
        const container = document.getElementById('quiz-container');
        if (container) {
            container.innerHTML = `<p class="error">${message}</p>`;
        }
    }
}

// 错题回顾折叠/展开功能
function toggleWrongAnswers() {
    const list = document.getElementById('wrongAnswersList');
    const icon = document.querySelector('.toggle-icon');
    
    if (!list || !icon) return;
    
    if (list.classList.contains('collapsed')) {
        list.classList.remove('collapsed');
        icon.textContent = '▲';
        icon.style.transform = 'rotate(180deg)';
    } else {
        list.classList.add('collapsed');
        icon.textContent = '▼';
        icon.style.transform = 'rotate(0deg)';
    }
}

// 初始化测验管理器
let quizManager;
document.addEventListener('DOMContentLoaded', () => {
    quizManager = new QuizManager();
});