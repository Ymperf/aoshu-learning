# 快速部署指南

## 方式一：使用自动化脚本（推荐）

### Windows 用户
双击运行 `deploy-to-github.bat`，按提示操作即可。

### Mac/Linux 用户
```bash
bash deploy-to-github.sh
```

## 方式二：手动执行命令

### 1. 在 GitHub 创建仓库
访问 https://github.com/new
- 仓库名：`aoshu-learning`
- 类型：Public
- ❌ 不要勾选任何初始化选项

### 2. 本地推送代码
```bash
# 初始化（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "完整版：小学奥数学习应用"

# 关联远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/aoshu-learning.git

# 推送
git branch -M main
git push -u origin main
```

### 3. 在 Vercel 部署
1. 访问 https://vercel.com/
2. 用 GitHub 账号登录
3. 点击 **Add New...** → **Project**
4. 选择 `aoshu-learning` 仓库
5. 点击 **Deploy**

### 4. 配置环境变量（可选）
如果需要 AI 生成功能：
- 在 Vercel 项目设置中添加 `ANTHROPIC_API_KEY`

## 后续更新

每次修改后：
```bash
git add .
git commit -m "描述修改内容"
git push
```

Vercel 会自动重新部署。

## 详细文档

查看 [GitHub-Vercel部署流程.md](./GitHub-Vercel部署流程.md) 获取完整说明。

## 常见问题

**Q: git push 需要登录？**
- 浏览器会自动弹出 GitHub 授权页面
- 或使用 `gh auth login` 命令登录

**Q: Vercel 部署失败？**
- 检查 `package.json` 中的 build 脚本
- 查看 Vercel 部署日志

**Q: 页面显示空白？**
- 检查浏览器控制台错误
- 确认路由配置正确

## 项目信息

- **技术栈**: React + TypeScript + Vite
- **题库**: 80个专题，800道题
- **图形**: 17个专题，20+个SVG
- **构建大小**: ~700KB (gzip: ~245KB)
