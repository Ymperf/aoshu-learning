#!/bin/bash

# 小学奥数学习应用 - GitHub 部署脚本

echo "================================"
echo "GitHub + Vercel 部署向导"
echo "================================"
echo ""

# 检查是否已经初始化 git
if [ ! -d .git ]; then
    echo "步骤 1: 初始化 Git 仓库..."
    git init
    echo "✓ Git 仓库初始化完成"
else
    echo "✓ Git 仓库已存在"
fi

echo ""
echo "步骤 2: 添加所有文件..."
git add .
echo "✓ 文件添加完成"

echo ""
echo "步骤 3: 创建提交..."
git commit -m "完整版：小学奥数学习应用（含800道题+SVG图形）"
echo "✓ 提交创建完成"

echo ""
echo "================================"
echo "接下来需要手动操作："
echo "================================"
echo ""
echo "1. 访问 https://github.com/new 创建新仓库"
echo "   - 仓库名称：aoshu-learning（或其他名称）"
echo "   - 设置为 Public"
echo "   - 不要勾选任何初始化选项"
echo ""
echo "2. 创建完成后，复制仓库地址（如：https://github.com/YOUR_USERNAME/aoshu-learning.git）"
echo ""
read -p "请输入你的 GitHub 仓库地址: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ 未输入仓库地址，脚本退出"
    exit 1
fi

echo ""
echo "步骤 4: 关联远程仓库..."
git remote add origin "$REPO_URL"
echo "✓ 远程仓库关联完成"

echo ""
echo "步骤 5: 推送到 GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "================================"
    echo "✓ 推送成功！"
    echo "================================"
    echo ""
    echo "下一步："
    echo "1. 访问 https://vercel.com/"
    echo "2. 使用 GitHub 账号登录"
    echo "3. 点击 'Add New...' → 'Project'"
    echo "4. 导入你的 aoshu-learning 仓库"
    echo "5. 配置环境变量 ANTHROPIC_API_KEY（如果需要 AI 功能）"
    echo "6. 点击 Deploy"
    echo ""
    echo "详细步骤请查看: docs/GitHub-Vercel部署流程.md"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1. GitHub 仓库地址是否正确"
    echo "2. 是否已登录 GitHub（可能需要浏览器授权）"
    echo "3. 网络连接是否正常"
    echo ""
    echo "手动推送命令："
    echo "git push -u origin main"
fi
