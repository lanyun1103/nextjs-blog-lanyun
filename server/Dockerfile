# --- Backend Dockerfile ---

# 使用官方 Node.js 为基础的镜像
FROM node:16

# 创建应用目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 将应用源代码复制到容器中
COPY . .

# 暴露 Express 监听的端口
EXPOSE 3001

# 启动应用
CMD [ "node", "app.js" ]

