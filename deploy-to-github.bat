@echo off
chcp 65001 >nul
cls
echo ========================================
echo   GitHub + Vercel 部署向导
echo ========================================
echo.

REM 检查 git 是否安装
git --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Git，请先安装 Git
    echo 下载地址: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [1/5] 检查 Git 仓库状态...
if not exist .git (
    echo       初始化 Git 仓库...
    git init
    if errorlevel 1 (
        echo [错误] Git 初始化失败
        pause
        exit /b 1
    )
    echo       [完成] Git 仓库已初始化
) else (
    echo       [完成] Git 仓库已存在
)
echo.

echo [2/5] 添加文件到暂存区...
git add .
if errorlevel 1 (
    echo [错误] 文件添加失败
    pause
    exit /b 1
)
echo       [完成] 所有文件已添加
echo.

echo [3/5] 创建提交...
git commit -m "完整版：小学奥数学习应用（含800道题+SVG图形）"
if errorlevel 1 (
    echo [提示] 没有新的更改需要提交，或提交失败
    echo       如果是首次提交失败，请配置 Git 用户信息：
    echo       git config --global user.name "Your Name"
    echo       git config --global user.email "your.email@example.com"
)
echo       [完成] 提交已创建
echo.

echo ========================================
echo   请完成以下步骤：
echo ========================================
echo.
echo 步骤 A: 在 GitHub 创建仓库
echo   1. 访问 https://github.com/new
echo   2. 仓库名称: aoshu-learning
echo   3. 选择 Public
echo   4. 不要勾选任何初始化选项
echo   5. 点击 Create repository
echo.
echo 步骤 B: 复制仓库地址
echo   创建完成后，复制仓库 URL
echo   格式: https://github.com/用户名/aoshu-learning.git
echo.
echo ========================================
echo.

set /p REPO_URL="请粘贴你的 GitHub 仓库地址: "

if "%REPO_URL%"=="" (
    echo.
    echo [错误] 未输入仓库地址
    echo.
    echo 你可以稍后手动执行以下命令：
    echo   git remote add origin 你的仓库地址
    echo   git branch -M main
    echo   git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo [4/5] 关联远程仓库...
git remote add origin "%REPO_URL%" 2>nul
if errorlevel 1 (
    echo       [提示] 远程仓库可能已存在，尝试更新...
    git remote set-url origin "%REPO_URL%"
)
echo       [完成] 远程仓库已关联
echo.

echo [5/5] 推送到 GitHub...
echo       这可能需要几秒钟，请稍候...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo   [失败] 推送失败
    echo ========================================
    echo.
    echo 可能的原因：
    echo   1. 需要 GitHub 登录授权（浏览器会弹出）
    echo   2. 仓库地址不正确
    echo   3. 网络连接问题
    echo.
    echo 请尝试手动推送：
    echo   git push -u origin main
    echo.
    echo 如需帮助，查看: docs\GitHub-Vercel部署流程.md
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   [成功] 代码已推送到 GitHub
echo ========================================
echo.
echo 下一步：在 Vercel 部署
echo.
echo   1. 访问 https://vercel.com/
echo   2. 使用 GitHub 账号登录
echo   3. 点击 Add New... 然后选择 Project
echo   4. 找到并导入 aoshu-learning 仓库
echo   5. 点击 Deploy 按钮
echo.
echo 可选：配置环境变量
echo   如需 AI 功能，在 Vercel 项目设置中添加：
echo   ANTHROPIC_API_KEY = 你的API密钥
echo.
echo 详细说明: docs\GitHub-Vercel部署流程.md
echo.
echo ========================================
pause
