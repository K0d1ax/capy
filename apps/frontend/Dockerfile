# Build and run frontend using pnpm from monorepo root
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate

FROM base AS builder
WORKDIR /repo
COPY package.json pnpm-workspace.yaml turbo.json .prettierrc .eslintrc.js tsconfig.base.json ./
COPY packages ./packages
COPY apps/frontend/package.json ./apps/frontend/package.json
RUN pnpm -r install
COPY apps/frontend ./apps/frontend
RUN pnpm --filter @landingstudio/frontend build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /repo/apps/frontend/.next ./.next
COPY --from=builder /repo/apps/frontend/public ./public
COPY --from=builder /repo/apps/frontend/package.json ./package.json
RUN corepack enable && corepack prepare pnpm@9.11.0 --activate && pnpm install --prod
EXPOSE 3000
CMD ["pnpm", "start"]
