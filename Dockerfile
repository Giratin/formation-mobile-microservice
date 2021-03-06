FROM node:12

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "./bin/www"]