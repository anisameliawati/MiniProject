/*
  Warnings:

  - You are about to drop the column `discount` on the `Discount` table. All the data in the column will be lost.
  - Added the required column `discountAmount` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Discount` DROP COLUMN `discount`,
    ADD COLUMN `discountAmount` INTEGER NOT NULL,
    ADD COLUMN `discountBanner` VARCHAR(191) NULL;
