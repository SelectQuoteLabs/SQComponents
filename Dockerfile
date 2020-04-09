FROM node:erbium as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build-storybook
FROM nginx
COPY --from=build /app/.out /usr/share/nginx/html