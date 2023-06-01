-- CreateTable
CREATE TABLE "recipe" (
    "id" SERIAL NOT NULL,
    "dishType" TEXT NOT NULL,
    "diet" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "preparationMethod" TEXT NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "recipeId" INTEGER,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
