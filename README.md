# Bun + Prisma + Docker

I had some problems getting Bun to work with Prisma and Docker, so I made this example to test it out.

What finally worked for me was implementing the Dockerfile as described in the following
[gh issue](https://github.com/oven-sh/bun/issues/4848#issuecomment-1787687534).

The workaround solves the issue by installing Node in the container, because it seems like it's needed to generate
Prisma client.

Note, that the issue with Prisma and Bun in a container still remains, and ideally the step with installing Node
shouldn't be necessary.

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
