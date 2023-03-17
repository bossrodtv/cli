FROM node:16-buster-slim

# Install necessary tools for installion.
RUN apt update && apt install -y g++ make python3-dev

# Go to /app directory.
WORKDIR /app

# Add permission to the /app folder.
RUN chmod -R 775 /app

# Install pnpm globally.
RUN npm i -g pnpm@7.17.0

# Copy all required files for installation.
COPY package.json /app

# Install dependencies.
RUN pnpm i

CMD ["pnpm", "dev"]
