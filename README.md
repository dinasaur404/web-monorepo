# web-monorepo

An Astro monorepo managed with pnpm workspaces and Turborepo.

## Requirements

- Node.js 24 or newer
- pnpm 10.26.2

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm deploy:all
```

The web app is located in `apps/web`. Every application under `apps/` defines
its own `deploy` task, and the root command deploys all of them through
Turborepo.
