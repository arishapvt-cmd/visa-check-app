# Root Dockerfile for Visa Check App
FROM node:20-alpine AS builder

WORKDIR /app

COPY visacheckapp/package.json visacheckapp/package-lock.json ./
RUN npm ci

COPY visacheckapp/ ./
RUN npm run build

FROM nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html
COPY visacheckapp/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
