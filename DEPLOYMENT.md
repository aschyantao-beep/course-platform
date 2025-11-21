# 🚀 部署说明

## 项目配置信息

- **Supabase URL**: `https://ebylczerbbhkccfoefgk.supabase.co`
- **GitHub 仓库**: `https://github.com/aschyantao-beep/course-platform`
- **部署平台**: Vercel

## 本地开发

```bash
# 启动本地服务器
python -m http.server 8000

# 访问地址
http://localhost:8000
```

## 部署步骤

### 1. GitHub 部署
```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "Add Supabase integration and Vercel configuration"

# 推送到 GitHub
git push origin main
```

### 2. Vercel 部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 导入项目：`aschyantao-beep/course-platform`
4. 配置环境变量（如果需要）
5. 点击 "Deploy"

## 环境变量

在 Vercel 中设置以下环境变量（如果需要）：
- `NEXT_PUBLIC_SUPABASE_URL`: `https://ebylczerbbhkccfoefgk.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 功能特性

✅ 用户注册/登录
✅ 学习进度追踪
✅ 数据同步到 Supabase
✅ 多用户支持
✅ 响应式设计
✅ 管理员后台

## 数据库表

已创建的 Supabase 数据库表：
- `users` - 用户信息
- `courses` - 课程信息
- `learning_sessions` - 学习记录
- `quiz_results` - 测试成绩
- `user_progress` - 学习进度

## 安全配置

✅ 行级安全策略 (RLS) 已启用
✅ CORS 配置
✅ 安全头部设置
✅ API 密钥管理

## 部署后检查清单

- [ ] 网站首页正常加载
- [ ] 用户注册/登录功能正常
- [ ] 课程页面访问正常
- [ ] 学习数据正常保存
- [ ] 管理员后台访问正常
- [ ] 移动端显示正常

## 故障排除

### 数据库连接问题
1. 检查 Supabase URL 和密钥是否正确
2. 确认数据库表已创建
3. 检查行级安全策略

### 部署问题
1. 检查 Vercel 构建日志
2. 确认文件路径正确
3. 检查环境变量配置

### 访问问题
1. 检查 DNS 解析
2. 确认 SSL 证书
3. 检查文件权限

---

**部署完成后，你的网站将可以通过 Vercel 提供的域名访问！** 🎉