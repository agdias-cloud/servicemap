FROM node:22.4.0-slim
RUN mkdir /app
COPY api/app/ /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["node","server.js"]
