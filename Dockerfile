FROM node:20 AS build

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS final

COPY --from=build /build/dist /usr/share/nginx/html