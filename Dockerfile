FROM node:20-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

CMD ["pnpm", "start"]
