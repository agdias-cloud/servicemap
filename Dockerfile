FROM node:22.4.0-slim
RUN mkdir /app
COPY api/app/ /app/
WORKDIR /app
RUN npm install
EXPOSE 3000/tcp
ENTRYPOINT ["node","server.js"]
