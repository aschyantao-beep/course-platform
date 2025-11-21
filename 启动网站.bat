@echo off
chcp 65001 >nul
echo ========================================
echo    海外运营培训课程教学网站启动器
echo ========================================
echo.
echo 正在启动本地Web服务器...
echo 服务器地址: http://localhost:8000
echo 管理后台: http://localhost:8000/admin/login.html
echo.
echo 按 Ctrl+C 可停止服务器
echo ========================================
echo.
python -m http.server 8000
pause