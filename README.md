# Bun + Prisma + Docker

I had some problems getting Bun to work with Prisma and Docker, so I made this example to test it out.

What finally worked for me was implementing the Dockerfile as described in the following
[gh issue](https://github.com/oven-sh/bun/issues/4848#issuecomment-1787687534).

## Run locally

Install dependencies:

```shell
bun install
```

Run the app

```shell
bun dev
```

## Run with Docker

```shell
docker compose up
```

## Created with bun init

This project was created using `bun init` in bun v1.0.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
