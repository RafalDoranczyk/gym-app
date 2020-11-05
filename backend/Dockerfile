FROM node:12-alpine

WORKDIR /node

COPY package.json ./

COPY tsconfig.json ./

COPY ./src ./src

RUN yarn install
