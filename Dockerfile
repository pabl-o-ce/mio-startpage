# Use the official Node.js Slim image as the base
FROM node:20-slim AS base

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable Corepack (pnpm) in the base image
RUN corepack enable

# Copy the entire project
COPY . /app
WORKDIR /app

# Stage for installing production dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Stage for building the app
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Final stage for running the app
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

# Expose the port the app runs on
EXPOSE 8000

# Start the app
CMD ["pnpm", "start"]
