FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3000

RUN npm install
RUN npm run prisma:init


CMD ["npm", "run", "dev"]