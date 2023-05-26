const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getInfo(ctx) {
    try {
        const result = await prisma.$queryRaw`SELECT 1`;
        ctx.body = `Connection to the database is successful. Result: ${result[0]['?column?']}`;
    } catch (error) {
        ctx.body = `Error connecting to the database: ${error.message}`;
    }
}

module.exports = {
    getInfo
};
