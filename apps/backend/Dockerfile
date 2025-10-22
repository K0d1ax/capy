# Build and run backend using pnpm from monorepo root
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate

FROM base AS builder
WORKDIR /repo
COPY package.json pnpm-workspace.yaml turbo.json .prettierrc .eslintrc.js tsconfig.base.json ./
COPY packages ./packages
COPY apps/backend/package.json ./apps/backend/package.json
RUN pnpm install
COPY apps/backend ./apps/backend
RUN pnpm --filter @landingstudio/backend build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /repo/apps/backend/dist ./dist
COPY --from=builder /repo/apps/backend/package.json ./package.json
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate && pnpm install --prod
EXPOSE 4000
CMD ["node", "dist/index.js"]
