-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(100) NOT NULL,
    `fullName` VARCHAR(250) NOT NULL,
    `rate` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proyeks` (
    `name` VARCHAR(250) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `proyeks_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kegiatan` (
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

    UNIQUE INDEX `kegiatan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_proyekName_fkey` FOREIGN KEY (`proyekName`) REFERENCES `proyeks`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
