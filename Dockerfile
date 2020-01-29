FROM node:13.7-alpine3.10

# Create working directory
WORKDIR /app

# Copy over files and install dependencies
COPY package.json .
RUN npm install
COPY . /app

CMD ["npm", "run", "storybook"]

