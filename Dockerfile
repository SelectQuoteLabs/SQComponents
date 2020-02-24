FROM node:erbium-alpine3.11 as build

# Create working directory
WORKDIR /app

# Copy over files and install dependencies
COPY . .

# install python
RUN apk add python3

# build storybook static assets
RUN npm ci && npm run build-storybook

FROM nginx:1.17.8-alpine
COPY --from=build /app/.out /usr/share/nginx/html
