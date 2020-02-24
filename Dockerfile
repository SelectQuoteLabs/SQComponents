FROM node:erbium-alpine3.11 as build

# Create working directory
WORKDIR /app

# Copy over files and install dependencies
COPY . .

# install python
RUN sudo apt-get update
RUN sudo apt-get install python

# build storybook static assets
RUN npm ci && npm run build-storybook

FROM nginx:1.17.8-alpine
COPY --from=build /app/.out /usr/share/nginx/html
