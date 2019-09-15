FROM node:12.4-alpine

COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm i 
ENTRYPOINT npm start