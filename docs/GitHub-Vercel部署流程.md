# GitHub + Vercel 部署流程

## 第一步：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `aoshu-learning` (或你喜欢的名字)
   - **Description**: 小学奥数学习应用
   - **Public** 或 **Private**: 选择 Public（推荐）
   - ❌ **不要**勾选 "Add a README file"
   - ❌ **不要**勾选 "Add .gitignore"
   - ❌ **不要**选择 License
3. 点击 **Create repository**

## 第二步：本地项目关联 GitHub

在项目目录 `e:\CC-Project\aoshu` 下执行以下命令：

### 1. 初始化 Git（如果还没有）
```bash
git init
```

### 2. 添加所有文件
```bash
git add .
```

### 3. 创建第一次提交
```bash
git commit -m "初始提交：小学奥数学习应用完整版"
```

### 4. 关联远程仓库
**替换下面的 `YOUR_USERNAME` 为你的 GitHub 用户名：**
```bash
git remote add origin https://github.com/YOUR_USERNAME/aoshu-learning.git
```

### 5. 推送到 GitHub
```bash
git branch -M main
git push -u origin main
```

如果提示需要登录，会弹出浏览器进行 GitHub 授权。

## 第三步：在 Vercel 部署

### 方式一：通过 Vercel 网站（推荐）

1. 访问 https://vercel.com/
2. 点击右上角 **Sign Up** 或 **Log In**
3. 选择 **Continue with GitHub** 登录
4. 登录后，点击 **Add New...** → **Project**
5. 在 **Import Git Repository** 页面：
   - 找到你的 `aoshu-learning` 仓库
   - 点击 **Import**
6. 配置项目：
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build` (自动检测)
   - **Output Directory**: `dist` (自动检测)
7. 展开 **Environment Variables**，添加环境变量：
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: 你的 Claude API Key
   - 点击 **Add**
8. 点击 **Deploy**

等待 2-3 分钟，部署完成后会显示项目地址。

### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel

# 添加环境变量
vercel env add ANTHROPIC_API_KEY

# 生产环境部署
vercel --prod
```

## 第四步：配置环境变量（重要）

如果使用 AI 生成功能，需要配置 API Key：

1. 在 Vercel 项目页面，点击 **Settings**
2. 点击左侧 **Environment Variables**
3. 添加变量：
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: 你的 Claude API Key
   - **Environments**: 勾选 Production, Preview, Development
4. 点击 **Save**
5. 重新部署：回到 **Deployments** 页面，点击最新部署右侧的 **...** → **Redeploy**

## 第五步：后续更新流程

每次修改代码后，只需三步：

```bash
# 1. 添加修改
git add .

# 2. 提交修改
git commit -m "描述你的修改内容"

# 3. 推送到 GitHub
git push
```

Vercel 会自动检测到 GitHub 的更新并重新部署（约 2-3 分钟）。

## 常见问题

### Q1: git push 时提示需要认证？

**解决方案：**
```bash
# 使用 GitHub CLI（推荐）
# 1. 安装 GitHub CLI: https://cli.github.com/
# 2. 认证
gh auth login

# 或使用 Personal Access Token
# 1. 访问 https://github.com/settings/tokens
# 2. 生成新 token (repo 权限)
# 3. 使用 token 作为密码
```

### Q2: Vercel 部署失败？

**检查清单：**
- ✅ `package.json` 中有 `build` 脚本
- ✅ 构建命令是 `npm run build`
- ✅ 输出目录是 `dist`
- ✅ Node.js 版本兼容（推荐 18.x 或 20.x）

### Q3: 部署后页面空白？

**可能原因：**
- 路由配置问题：检查 `vercel.json` 是否正确
- 环境变量缺失：检查是否需要 API Key

### Q4: 如何查看部署日志？

1. 进入 Vercel 项目页面
2. 点击 **Deployments**
3. 点击具体的部署记录
4. 查看 **Build Logs** 和 **Function Logs**

## 项目结构检查

确保以下文件存在：

```
aoshu/
├── .gitignore          # Git 忽略文件
├── package.json        # 依赖配置
├── vite.config.ts      # Vite 配置
├── vercel.json         # Vercel 配置（可选）
├── tsconfig.json       # TypeScript 配置
├── index.html          # 入口 HTML
└── src/                # 源代码
```

## .gitignore 文件内容

确保 `.gitignore` 包含以下内容：

```
# 依赖
node_modules/
.pnp
.pnp.js

# 构建产物
dist/
dist-ssr/
*.local

# 编辑器
.vscode/
.idea/
*.swp
*.swo
*~

# 环境变量
.env
.env.local
.env.production.local
.env.development.local
.env.test.local

# 日志
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# 系统文件
.DS_Store
Thumbs.db

# Vercel
.vercel
```

## vercel.json 配置（可选）

如果需要自定义配置，创建 `vercel.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 完整命令速查

```bash
# 初始化和首次推送
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/YOUR_USERNAME/aoshu-learning.git
git branch -M main
git push -u origin main

# 后续更新
git add .
git commit -m "更新说明"
git push

# 查看状态
git status
git log --oneline

# 撤销修改
git checkout -- <file>        # 撤销单个文件
git reset --hard HEAD         # 撤销所有修改（危险）

# 分支操作
git branch                    # 查看分支
git checkout -b feature       # 创建并切换分支
git merge feature             # 合并分支
```

## 推荐的 Git 提交信息格式

```bash
# 功能
git commit -m "feat: 添加三年级题库"

# 修复
git commit -m "fix: 修复SVG图形显示问题"

# 文档
git commit -m "docs: 更新部署文档"

# 样式
git commit -m "style: 优化按钮样式"

# 重构
git commit -m "refactor: 重构题库加载逻辑"

# 性能
git commit -m "perf: 优化图片加载速度"

# 测试
git commit -m "test: 添加单元测试"
```

## 部署成功后

访问 Vercel 提供的域名（如 `https://aoshu-learning.vercel.app`），检查：

- ✅ 首页正常显示
- ✅ 专题列表加载正常
- ✅ 题目练习功能正常
- ✅ SVG 图形正常显示
- ✅ 进度保存功能正常

## 自定义域名（可选）

1. 在 Vercel 项目页面，点击 **Settings** → **Domains**
2. 输入你的域名（如 `aoshu.example.com`）
3. 按照提示在域名服务商处添加 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

## 技术支持

- **Vercel 文档**: https://vercel.com/docs
- **GitHub 文档**: https://docs.github.com/
- **Git 教程**: https://git-scm.com/book/zh/v2
