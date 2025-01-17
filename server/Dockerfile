# Dockerfile
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/server

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the server source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the server
CMD ["npm", "start"]