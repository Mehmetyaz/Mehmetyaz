# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/.output ./
COPY --from=builder /app/.nuxt ./
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/server/index.mjs"]
