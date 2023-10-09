FROM node:18-alpine

WORKDIR /usr/app

COPY index.mjs .
COPY package.json .
COPY package-lock.json .
COPY /src ./src

ENV PORT 5001
ENV MONGO_URI mongodb+srv://zarrokUao:CtDKWC4USSxbrNQN@cluster0.lgkqjlw.mongodb.net/demo_Estructuras
ENV MINIO_HOST=http://minio:9000
ENV MINIO_ACCESS_KEY=minio
ENV MINIO_ROOT_PASSWORD=123minio321

EXPOSE 5001

RUN npm install --production

ENTRYPOINT [ "npm", "start" ]
