# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the working directory
COPY . .

# Build the TypeScript app
RUN npm run build

# Expose the port on which your app listens
EXPOSE 3333

# Set the command to start the app when the container is run
CMD [ "node", "./dist/index.js" ]
