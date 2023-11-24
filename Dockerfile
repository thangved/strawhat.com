FROM node:alpine-20 as development

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "dev" ]

FROM development as production

RUN npm run build

FROM nginx:alpine

COPY --from=production /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /user/share/nginx/html

RUN rm -rf ./*

COPY --from=production /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]