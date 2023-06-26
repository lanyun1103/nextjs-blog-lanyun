# --- Frontend Dockerfile ---

# 阶段1：构建
FROM node:16 as build

# 创建应用目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 阶段2：运行
FROM node:16

# 创建应用目录
WORKDIR /usr/src/app

# 复制构建结果到运行阶段
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/public ./public

# 安装只有生产环境需要的依赖
RUN npm install --production

# 暴露 Next.js 监听的端口
EXPOSE 3000

# 启动应用
CMD [ "npm", "start" ]

