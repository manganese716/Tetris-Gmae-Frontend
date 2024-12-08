FROM node:alpine3.18 AS builder

WORKDIR /app

COPY tetris-game/package*.json ./

RUN npm install

COPY tetris-game .

RUN npm run build

# nginx server
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]