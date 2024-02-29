-- AlterTable
ALTER TABLE `Stock` MODIFY `status` ENUM('available', 'booked') NULL DEFAULT 'available';
