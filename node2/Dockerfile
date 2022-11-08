FROM node:19

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get upgrade -y

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]    