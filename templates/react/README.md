# Template React TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
$ nvm use or nvm use 16.13.0
```

- Create `.env` file.
- and refer to the `<secret-name>.example` for the required variables.

## Without Docker

- Install dependencies.

```bash
$ pnpm i
```

**Development Mode:**

```bash
$ pnpm dev
```

**Production Mode:**

- Build the application.

```bash
$ pnpm build
```

- and serve the generated `build` folder to the server.

## With Docker

**Development Mode:**

- Build container.

```bash
docker compose build # Build with cache
docker compose build --no-cache # Build with no cache
```

- Run container.

```bash
docker compose up # Run in foreground
docker compose up -d # Run in background
```

- Shutdown container.

```bash
docker compose down # Remove without volumes
docker compose down -v # Remove with volumes
```

**Production Mode:**

- Build container.

```bash
docker compose -f docker-compose.prod.yaml build # Build with cache
docker compose -f docker-compose.prod.yaml build --no-cache # Build with no cache
```

- Run container.

```bash
docker compose -f docker-compose.prod.yaml up # Run in foreground
docker compose -f docker-compose.prod.yaml up -d # Run in background
```

- Shutdown container.

```bash
docker compose -f docker-compose.prod.yaml down # Remove without volumes
docker compose -f docker-compose.prod.yaml down -v # Remove with volumes
```

- Access the container.

```bash
docker exec -it <container_name> bash
```

```bash
docker logs <container_name>
```
