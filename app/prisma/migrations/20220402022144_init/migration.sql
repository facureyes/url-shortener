/*
  Warnings:

  - You are about to drop the column `originallUrl` on the `Urls` table. All the data in the column will be lost.
  - Added the required column `originalUrl` to the `Urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "originallUrl",
ADD COLUMN     "originalUrl" VARCHAR(1000) NOT NULL;
