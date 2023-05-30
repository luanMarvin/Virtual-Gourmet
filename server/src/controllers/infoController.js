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

async function postInfo(ctx) {
  try {
    const { dishType, diet, difficulty, name, rating, preparationMethod, ingredients } = ctx.request.body;

    const recipe = await prisma.recipe.create({
      data: {
        dishType,
        diet,
        difficulty,
        name,
        rating,
        preparationMethod,
        ingredients: { create: ingredients },
      },
      include: {
        ingredients: true,
      },
    });

    ctx.body = recipe;
  } catch (error) {
    ctx.body = `Error creating recipe: ${error.message}`;
  }
}

module.exports = {
  getInfo,
  postInfo,
};
