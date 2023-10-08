FROM node:lts

WORKDIR /usr/src/app

COPY package*.json .
COPY index.js .

RUN tree -a
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]

