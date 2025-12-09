# Stage 1: Build the application
FROM node:alpine AS builder
WORKDIR /usr/app
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Install build dependencies
RUN apk --no-cache add automake g++ make bash git alpine-sdk nasm autoconf build-base zlib zlib-dev libpng libpng-dev libwebp libwebp-dev libjpeg-turbo libjpeg-turbo-dev

# Copy only package files first to leverage Docker cache
COPY package*.json ./
RUN npm install --force

# Copy the rest of the source and build the app
COPY . ./
RUN npm run build

# Stage 2: Production image
FROM node:alpine
WORKDIR /usr/app

# Copy the built files and dependencies from builder
COPY --from=builder /usr/app ./

# Ensure non-root permissions for security
RUN chown -R node:node /usr/app

# Expose the Next.js server port
EXPOSE 3000

# Switch to non-root user and start the server
USER node
CMD ["npm", "start"]