FROM node:alpine

WORKDIR /app1

COPY . .

EXPOSE 9898

CMD node server.js
