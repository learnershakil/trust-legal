/*
  Warnings:

  - You are about to drop the column `star` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "star",
ADD COLUMN     "Fav" BOOLEAN NOT NULL DEFAULT false;
