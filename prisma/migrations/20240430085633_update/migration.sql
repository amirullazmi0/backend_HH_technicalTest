/*
  Warnings:

  - You are about to drop the `kegiatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `kegiatan` DROP FOREIGN KEY `kegiatan_proyekName_fkey`;

-- DropTable
DROP TABLE `kegiatan`;

-- CreateTable
CREATE TABLE `kegiatans` (
    `id` VARCHAR(250) NOT NULL,
    `proyekId` VARCHAR(191) NOT NULL,
    `judulKegiatan` VARCHAR(1000) NOT NULL,
    `tanggalMulai` VARCHAR(250) NOT NULL,
    `tanggalSelesai` VARCHAR(250) NOT NULL,
    `waktuMulai` VARCHAR(250) NOT NULL,
    `waktuSelesai` VARCHAR(250) NOT NULL,
    `durasi` VARCHAR(250) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `proyekName` VARCHAR(250) NOT NULL,

    UNIQUE INDEX `kegiatans_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kegiatans` ADD CONSTRAINT `kegiatans_proyekName_fkey` FOREIGN KEY (`proyekName`) REFERENCES `proyeks`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
