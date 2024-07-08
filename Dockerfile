FROM node:22.4.0-slim
RUN mkdir /app
COPY api/app/ /app/
ENTRYPOINT["NODE_DEV='prod'","node","api/app/server"]
