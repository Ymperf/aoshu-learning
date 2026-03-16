# 小学奥数学习应用

面向小学生和家长的奥数学习 Web 应用，覆盖 1-6 年级共 80 个奥数专题。

## 功能

- 按年级和类别浏览 80 个奥数专题
- 每个专题包含知识点讲解和例题解析
- 练习题支持选择题、填空题、判断题、步骤解析题
- 本地进度追踪（无需登录）
- AI 动态生成题目（需配置 Anthropic API Key）

## 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS
- Zustand（状态管理）
- React Router v6
- Vercel Edge Functions（AI 代理）

## 本地开发

```bash
npm install
npm run dev
```

## 接入 AI

1. 复制 `.env.example` 为 `.env.local`
2. 填入 Anthropic API Key
3. 安装 Vercel CLI：`npm i -g vercel`
4. 本地测试：`vercel dev`

## 部署到 Vercel

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 设置环境变量 `ANTHROPIC_API_KEY`
4. 部署
