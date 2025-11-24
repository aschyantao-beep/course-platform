-- Supabase 数据库表结构
-- 在 Supabase SQL Editor 中运行这些命令来创建必要的表

-- 创建学习会话表
CREATE TABLE IF NOT EXISTS learning_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    page_type VARCHAR(50) DEFAULT 'other',
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    duration INTEGER NOT NULL, -- 秒
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建用户进度表
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    lessons_completed INTEGER DEFAULT 0,
    total_lessons INTEGER DEFAULT 10,
    progress_percentage INTEGER DEFAULT 0,
    total_study_time INTEGER DEFAULT 0, -- 秒
    session_count INTEGER DEFAULT 0,
    last_access_time TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- 确保每个用户每个课程只有一条进度记录
    UNIQUE(user_id, course_id)
);

-- 创建测验结果表
CREATE TABLE IF NOT EXISTS quiz_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    quiz_id VARCHAR(50),
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    time_taken INTEGER, -- 秒
    answers_data JSONB, -- 存储详细的答案数据
    passed BOOLEAN NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_learning_sessions_user_id ON learning_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_learning_sessions_course_id ON learning_sessions(course_id);
CREATE INDEX IF NOT EXISTS idx_learning_sessions_created_at ON learning_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_course_id ON user_progress(course_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_course_id ON quiz_results(course_id);

-- 创建更新时间戳的函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 创建触发器自动更新 updated_at 字段
DROP TRIGGER IF EXISTS update_learning_sessions_updated_at ON learning_sessions;
CREATE TRIGGER update_learning_sessions_updated_at
    BEFORE UPDATE ON learning_sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_user_progress_updated_at ON user_progress;
CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 设置行级安全策略 (RLS)
ALTER TABLE learning_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- 学习会话表的 RLS 策略
DROP POLICY IF EXISTS "Users can view own learning sessions" ON learning_sessions;
CREATE POLICY "Users can view own learning sessions" ON learning_sessions
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own learning sessions" ON learning_sessions;
CREATE POLICY "Users can insert own learning sessions" ON learning_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own learning sessions" ON learning_sessions;
CREATE POLICY "Users can update own learning sessions" ON learning_sessions
    FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own learning sessions" ON learning_sessions;
CREATE POLICY "Users can delete own learning sessions" ON learning_sessions
    FOR DELETE USING (auth.uid() = user_id);

-- 用户进度表的 RLS 策略
DROP POLICY IF EXISTS "Users can view own progress" ON user_progress;
CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own progress" ON user_progress;
CREATE POLICY "Users can insert own progress" ON user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON user_progress;
CREATE POLICY "Users can update own progress" ON user_progress
    FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own progress" ON user_progress;
CREATE POLICY "Users can delete own progress" ON user_progress
    FOR DELETE USING (auth.uid() = user_id);

-- 测验结果表的 RLS 策略
DROP POLICY IF EXISTS "Users can view own quiz results" ON quiz_results;
CREATE POLICY "Users can view own quiz results" ON quiz_results
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own quiz results" ON quiz_results;
CREATE POLICY "Users can insert own quiz results" ON quiz_results
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own quiz results" ON quiz_results;
CREATE POLICY "Users can update own quiz results" ON quiz_results
    FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own quiz results" ON quiz_results;
CREATE POLICY "Users can delete own quiz results" ON quiz_results
    FOR DELETE USING (auth.uid() = user_id);

-- 给认证用户授予表访问权限
GRANT SELECT, INSERT, UPDATE, DELETE ON learning_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON user_progress TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON quiz_results TO authenticated;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;