FROM node as build-step

WORKDIR /aplicacion

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod

EXPOSE 80

FROM nginx

COPY --from=build-step /aplicacion/dist/frontend /usr/share/nginx/html
