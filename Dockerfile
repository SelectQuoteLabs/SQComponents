FROM node:erbium as build

# Create working directory
WORKDIR /app

# Copy over files and install dependencies
COPY . .

# build storybook static assets
RUN npm ci 
# && npm run build-storybook

# FROM nginx:1.17.8-alpine
# COPY --from=build /app/.out /usr/share/nginx/html
EXPOSE 6006
CMD npm run storybook