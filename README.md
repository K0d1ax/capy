# LandingStudio Monorepo

Initial scaffolding for LandingStudio using pnpm workspaces and Turborepo. This PR sets up the monorepo, a Next.js dashboard shell, a Fastify API stub, shared configs/types, CI, Dockerfiles, and basic tests.

## Overview
- Monorepo: pnpm workspaces + Turborepo
- Frontend: Next.js 14 (app router), React, TypeScript, Tailwind CSS
- Backend: Fastify + TypeScript (simple JSON API)
- Testing: Playwright (E2E smoke), Vitest (unit test placeholders)
- CI: GitHub Actions (install, typecheck, lint, build, test)

No real auth/DB/storage/templates yet. These will land in subsequent PRs.

## Local Development
Prerequisites:
- Node.js 20+
- pnpm 9+

Install and run dev servers:

```
pnpm install
pnpm dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

Scripts:
- `pnpm dev` – run frontend and backend concurrently via Turborepo
- `pnpm build` – build all packages and apps
- `pnpm typecheck` – TypeScript checks across workspace
- `pnpm lint` – ESLint across workspace
- `pnpm test` – run unit tests and Playwright E2E smoke tests

## Workspace Layout
```
apps/
  frontend/  # Next.js dashboard shell (Tailwind configured)
  backend/   # Fastify API with /health and leads stubs (501)
packages/
  shared/    # tsconfig presets, eslint configs, shared types
infra/
  k8s/       # placeholder manifests
  terraform/ # placeholder manifests
templates/
  bios/
  courses/
  landing-pages/
  linktrees/
  popups/
  quizzes/
  root/
```

## Environment Variables
Copy `.env.example` to `.env` at repo root and/or app folders as needed.

```
# Common
FRONTEND_PORT=3000
BACKEND_PORT=4000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

## CI
GitHub Actions runs install, typecheck, lint, build, and tests on push/PR to `main`. Playwright HTML report is uploaded on failure.

## Notes
- Strict TypeScript everywhere
- Prettier + ESLint enforced
- Accessible, keyboard-navigable left nav in dashboard
- Editor/Preview placeholders only; strict CSP for preview will be added later
