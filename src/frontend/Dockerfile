FROM node AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i 

COPY ./src ./src
COPY ./public ./public
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.node.json ./tsconfig.node.json

ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "run", "start"]
