FROM node:lts-alpine

WORKDIR /app

RUN npm install -g @angular/cli

COPY src/package.json .

RUN npm install

COPY src .

EXPOSE 4200 

CMD [ "ng", "serve", "--poll", "2000", "--host", "0.0.0.0" ]