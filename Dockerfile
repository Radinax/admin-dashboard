# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or bun.lock in this case)
COPY package*.json bun.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 80 for the application
EXPOSE 80

# Serve the application using vite preview
# In production, you might want to use a more robust server like nginx
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "80"]