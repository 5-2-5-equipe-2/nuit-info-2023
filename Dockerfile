# Stage 1: Build Stage
FROM node:21 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production Stage
FROM node:21-slim

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Install only production dependencies
RUN npm install --only=production

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
