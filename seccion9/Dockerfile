# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder
WORKDIR /app

# Instalar NestJS CLI globalmente
RUN npm install -g @nestjs/cli
RUN npm i --save-dev @types/node

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run the app
FROM node:18-alpine3.15 AS runner
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

# Expose the application port
EXPOSE 3000

CMD [ "node", "dist/main" ]