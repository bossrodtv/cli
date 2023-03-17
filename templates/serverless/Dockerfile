FROM node:16-buster-slim

# Install needed packages.
RUN apt update && apt install -y vim nano curl unzip libpq-dev g++ make python3-dev

# Install AWS CLI.
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

# Go to /app directory.
WORKDIR /app

# Add permission to the /app folder.
RUN chmod -R 775 /app

# Install global packages.
RUN npm i -g pnpm
RUN npm i -g nodemon
RUN npm i -g serverless

# Copy needed files for installation.
COPY package.json /app
COPY .npmrc /app
COPY .aws-config /app
COPY .aws-credentials /app

# Setup AWS Credentials.
RUN mkdir -p ~/.aws
RUN touch ~/.aws/config && cat .aws-config >~/.aws/config
RUN touch ~/.aws/credentials && cat .aws-credentials >~/.aws/credentials

# Install packages.
RUN pnpm i

CMD ["pnpm", "dev"]
