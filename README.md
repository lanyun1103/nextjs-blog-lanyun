# Next.js 博客项目

这是一个使用 Next.js、Express.js 和 PostgreSQL 构建的博客项目。前端使用 Next.js 进行开发，后端使用 Express.js 提供 API 服务，数据存储在 PostgreSQL 数据库中。

## 主要功能

- 文章列表展示
- 文章详情查看
- 文章发布和编辑（管理员）
- 用户注册和登录
- 用户评论（登录用户）
  
## 技术栈

- 前端框架：Next.js，使用 React Hooks 和 Jotai 进行状态管理
- UI 库：Tailwind CSS
- 后端框架：Express.js
- 数据库：PostgreSQL
- 容器化技术：Docker
- CI/CD：Docker Compose，用于在本地开发环境快速构建和运行应用
- 代码规范检查：ESLint, Husky, and Commitlint

## 开发环境准备

1. 安装 Node.js 和 npm。确保你的开发环境已经安装 Node.js 和 npm。你可以通过在终端运行以下命令来验证它们是否已经安装：

    ```bash
    node -v
    npm -v
    ```

    如果你看到了版本号，那么说明 Node.js 和 npm 已经安装好了。

2. 安装 Docker 和 Docker Compose。请参照官方文档进行安装：

    - Docker：https://docs.docker.com/get-docker/
    - Docker Compose：https://docs.docker.com/compose/install/

3. 克隆此仓库到你的本地环境：

    ```bash
    git clone <此仓库的git地址>
    ```

4. 在项目的根目录中，运行以下命令安装依赖：

    ```bash
    npm install
    ```

## 本地开发

在项目的根目录中，运行以下命令启动前端和后端服务：

```bash
docker-compose up
```

然后，你可以通过浏览器访问 `http://localhost:3000` 来查看前端应用。

## 生产环境部署

详细的生产环境部署指南会在后续补充。

## 项目结构

项目的主要目录结构如下：

```
/my-next-app
├── pages        # Next.js 页面组件
│   ├── _app.js  # Next.js 应用主组件，用于全局状态管理和全局样式
│   ├── index.js # 首页
│   └── ...
├── components   # 可重用的 React 组件
├── styles       # CSS 样式
│   └── global.css
├── server       # Express.js 后端服务
│   ├── index.js # 后端入口文件
│   └── ...
├── docker-compose.yml  # Docker Compose 配置文件
└── ...
```

## 贡献

我们欢迎任何形式的贡献！如果你发现了一个错误或有任何建议

，欢迎提交 issue 或 pull request。

## 许可证

MIT

## 联系

如果你有任何问题或建议，欢迎联系我们。