FROM node:19.2-alpine3.16 as dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:19.2-alpine3.16 as test
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine3.16 as produc
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY index.js ./
COPY src/ ./src
EXPOSE 3000
ENV PORT=3000
ENV MONGODB_USERNAME='root'
ENV MONGODB_PASSWORD=1234
CMD [ "node", "index.js"]

