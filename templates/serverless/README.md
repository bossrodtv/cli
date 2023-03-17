# Template Serverless TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0
- Install **serverless**
- Install **nodemon**

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use or nvm use 16.13.0
```

- Create `.env` file.
- and refer to the `<secret-name>.example` for the required variables.

## Without Docker

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm dev
```

**Deploy:**

```bash
pnpm deploy:<stage> # dev | staging | prod
```

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

- If you want to access the container.

```bash
$ docker exec -it <container-name> bash
```

```bash
docker logs <container_name>
```
