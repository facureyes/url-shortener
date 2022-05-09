-- CreateTable
CREATE TABLE "Urls" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "shortenUrl" VARCHAR(255) NOT NULL,
    "originalUrl" VARCHAR(1000) NOT NULL,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);
