FROM node:erbium-alpine3.11

# Create working directory
WORKDIR /app

# Copy over files and install dependencies
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . /app

CMD ["npm", "run", "storybook"]
