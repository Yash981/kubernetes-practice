FROM oven/bun:latest

WORKDIR /usr/app/src

COPY package* ./

RUN bun install

COPY . .

EXPOSE 3000

CMD [ "bun","index.ts" ]