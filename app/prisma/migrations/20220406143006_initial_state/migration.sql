/*
  Warnings:

  - The primary key for the `Urls` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Urls` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `shortenedUrl` to the `Urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_pkey",
ADD COLUMN     "shortenedUrl" VARCHAR(32) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Urls_pkey" PRIMARY KEY ("id");
