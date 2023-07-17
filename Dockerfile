# cypress docker image
FROM cypress/base:latest

#run build
WORKDIR /

COPY . .

ENV NODE_ENV=production

RUN yarn

RUN yarn cy:all

EXPOSE 8080

CMD [ "yarn",  "serve" ]
