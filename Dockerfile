FROM node:lts

WORKDIR /app

COPY package*.json .
COPY index.js .

RUN free -h
RUN pwd
RUN ls -la
RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]

