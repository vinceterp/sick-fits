const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    secret: process.env.PRISMA_SECRET,
    debug: false,
    endpoint: process.env.PRISMA_ENDPOINT
});

module.exports= db;

