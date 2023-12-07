/*
  Warnings:

  - You are about to drop the column `tempeture` on the `Metric` table. All the data in the column will be lost.
  - Added the required column `temperature` to the `Metric` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Metric" DROP COLUMN "tempeture",
ADD COLUMN     "temperature" DOUBLE PRECISION NOT NULL;
