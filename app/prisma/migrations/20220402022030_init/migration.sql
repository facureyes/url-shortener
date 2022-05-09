/*
  Warnings:

  - You are about to drop the column `originalUrl` on the `Urls` table. All the data in the column will be lost.
  - Added the required column `originallUrl` to the `Urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "originalUrl",
ADD COLUMN     "originallUrl" VARCHAR(1000) NOT NULL;
