import Fastify from 'fastify';
import cors from '@fastify/cors';

const PORT = Number(process.env.BACKEND_PORT || 4000);

async function buildServer() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true, credentials: true });

  app.get('/health', async () => ({ ok: true }));

  app.get('/api/ping', async () => ({ pong: true }));

  app.route({
    method: 'POST',
    url: '/api/leads',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'GET',
    url: '/api/leads',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'GET',
    url: '/api/leads/:id',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'POST',
    url: '/api/leads/bulk',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'GET',
    url: '/api/leads/export',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'POST',
    url: '/api/leads/webhook',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });
  app.route({
    method: 'POST',
    url: '/api/leads/sync',
    handler: async (_, reply) => reply.code(501).send({ error: 'Not Implemented' }),
  });

  return app;
}

buildServer()
  .then((app) => app.listen({ port: PORT, host: '0.0.0.0' }))
  .then((address) => {
    console.log(`API listening on ${address}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
