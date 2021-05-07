FROM node:alpine

WORKDIR /client

COPY . /client/

RUN yarn

CMD ["yarn", "start:client"]