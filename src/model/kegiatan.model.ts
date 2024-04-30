export class kegiatanResponse {
    id?: string
    judulKegiatan?: string
    tanggalMulai?: string
    tanggalSelesai?: string
    waktuMulai?: string
    waktuSelesai?: string
    durasi?: number
    proyekName?: string
    createdAt?: Date
    updatedAt?: Date
}

export class kegiatanRequest {
    judulKegiatan: string
    tanggalMulai: string
    tanggalSelesai: string
    waktuMulai: string
    waktuSelesai: string
    proyekName: string
}