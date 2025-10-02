# Define the base image to be used for development environment
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install -g @nestjs/cli
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Build the application (if needed)
RUN npm run build

# Define the default command to run the application
CMD ["npm", "run", "start:dev"]

# OR
# You can use ENTRYPOINT to run the application as an executable
# ENTRYPOINT ["/bin/sh", "-c", "npm run start:dev"]