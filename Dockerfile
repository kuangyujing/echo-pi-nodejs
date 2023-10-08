FROM node:lts

WORKDIR /usr/src/app

COPY package*.json .
COPY index.js .

RUN npm install

RUN ls -la

EXPOSE 3000

CMD [ "node", "index.js" ]

