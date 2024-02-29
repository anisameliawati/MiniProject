/*
  Warnings:

  - You are about to drop the column `discountAmount` on the `Discount` table. All the data in the column will be lost.
  - You are about to drop the column `discountBanner` on the `Discount` table. All the data in the column will be lost.
  - You are about to drop the column `discountName` on the `Discount` table. All the data in the column will be lost.
  - Added the required column `discount` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Discount` DROP COLUMN `discountAmount`,
    DROP COLUMN `discountBanner`,
    DROP COLUMN `discountName`,
    ADD COLUMN `discount` INTEGER NOT NULL;
