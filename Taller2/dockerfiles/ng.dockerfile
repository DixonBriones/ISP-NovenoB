FROM node:14-alpine

WORKDIR /app

RUN npm install -g @angular/cli

ENTRYPOINT [ "ng" ]

