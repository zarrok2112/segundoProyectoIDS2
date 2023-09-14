FROM node:18-alpine

WORKDIR /usr/app

COPY index.mjs .
COPY package.json .
COPY package-lock.json .
COPY /src ./src

ENV PORT 5001
ENV MONGO_URI mongodb+srv://zarrokUao:CtDKWC4USSxbrNQN@cluster0.lgkqjlw.mongodb.net/demo_Estructuras
EXPOSE 5001

RUN npm install --production

ENTRYPOINT [ "npm", "start" ]
