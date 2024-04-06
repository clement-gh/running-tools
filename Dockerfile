# docker file angular

# Base image
FROM node:alpine


# Set the working directory to /ap
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the current directory contents into the container at /app
COPY . .


# Make port 4500 available to the world outside this container
EXPOSE  4500

# Run the app when the container launches
CMD ["npm", "start"]

