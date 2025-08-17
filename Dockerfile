FROM oven/bun:1.2.20 AS build
WORKDIR /app

# Use Bun to install dependencies and build the Docusaurus site
# Copy lockfile and package manifest first to leverage layer caching
COPY package.json bun.lock* ./
RUN bun install

# Copy the rest of the repository and run the build
COPY . .
RUN bun run build

FROM nginx:stable-alpine

# Serve the built site
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
