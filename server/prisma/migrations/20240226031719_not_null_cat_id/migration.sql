/*
  Warnings:

  - You are about to drop the `Event_Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Event_Category` DROP FOREIGN KEY `Event_Category_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Event_Category` DROP FOREIGN KEY `Event_Category_eventId_fkey`;

-- AlterTable
ALTER TABLE `Event` ADD COLUMN `categoryId` INTEGER NULL;

-- DropTable
DROP TABLE `Event_Category`;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
