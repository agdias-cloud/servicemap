FROM node:22.4.0-slim
RUN mkdir /app
COPY api/app/ /app/
WORKDIR /app
ENV NODE_ENV=${NODE_ENV}
RUN npm install
ENTRYPOINT ["node","/app/server.js"]
