FROM node:8.10-alpine

RUN mkdir /app/
WORKDIR /app/

COPY . .

RUN npm install -g yarn
RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
