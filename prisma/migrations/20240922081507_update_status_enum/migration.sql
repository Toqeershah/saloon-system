/*
  Warnings:

  - The values [IN_PROGRESS] on the enum `Saloon_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `saloon` MODIFY `status` ENUM('OPEN', 'CLOSED', 'SHORT_BREAK') NOT NULL DEFAULT 'OPEN';
