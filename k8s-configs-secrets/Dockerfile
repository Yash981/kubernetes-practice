FROM oven/bun:latest

WORKDIR /user/app

COPY ./package* ./

RUN bun install

COPY . .

EXPOSE 3000

CMD [ "bun","index.ts" ]


