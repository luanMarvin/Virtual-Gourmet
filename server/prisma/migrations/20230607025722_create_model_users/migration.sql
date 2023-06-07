-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user" INTEGER NOT NULL,
    "password" INTEGER NOT NULL,
    "ownedRecipes" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_ownedRecipes_fkey" FOREIGN KEY ("ownedRecipes") REFERENCES "recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
