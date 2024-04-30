/*
  Warnings:

  - You are about to alter the column `durasi` on the `kegiatans` table. The data in that column could be lost. The data in that column will be cast from `VarChar(250)` to `Int`.

*/
-- AlterTable
ALTER TABLE `kegiatans` MODIFY `durasi` INTEGER NOT NULL;
