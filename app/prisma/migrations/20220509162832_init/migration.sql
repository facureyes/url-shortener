/*
  Warnings:

  - A unique constraint covering the columns `[shortenedUrl]` on the table `Urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Urls_shortenedUrl_key" ON "Urls"("shortenedUrl");
