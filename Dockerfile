# 基于镜像node，版本自己查看上面的链接
FROM node:12.22.8-alpine3.12
ENV NODE_ENV=production
ENV HOST 0.0.0.0
# 容器内创建目录blog-nuxt
RUN mkdir -p /www/blogNuxt
# 复制当前的内容到容器内容部目录blog
COPY . /www/blogNuxt
# 切换工作目录到blog
WORKDIR /www/blogNuxt
# 暴露端口8110
EXPOSE 8110
# 配置npm的远程仓库
RUN npm config set registry https://registry.npm.taobao.org
# 清除缓存
RUN npm cache clean --force
# 安装依赖
RUN npm install
# 构建，生成dist文件
RUN npm run build
# start
CMD ["npm","start"]
