import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request } from 'express';
import * as moment from 'moment';
import { kegiatanRequest, kegiatanResponse } from 'src/model/kegiatan.model';
import { proyekResponse } from 'src/model/proyek.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KegiatanService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findAll(name?: string, req?: Request): Promise<WebResponse<kegiatanResponse[] | any>> {
        let kegiatan = await this.prismaService.kegiatan.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        if (name) {
            kegiatan = await this.prismaService.kegiatan.findMany({
                where: {
                    judulKegiatan: {
                        startsWith: name
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
        }

        // console.log(req);


        let totalDurasi: number = 0
        for (let i = 0; i < kegiatan.length; i++) {
            totalDurasi = totalDurasi + kegiatan[i].durasi
        }


        return {
            success: true,
            message: 'get data success',
            data: {
                record: kegiatan.length,
                kegiatan: kegiatan,
                totalDurasi: totalDurasi
            }
        }
    }

    async create(req: kegiatanRequest): Promise<WebResponse<kegiatanResponse | any>> {
        const {
            proyekName,
            judulKegiatan,
            tanggalMulai,
            tanggalSelesai,
            waktuMulai,
            waktuSelesai
        } = req
        const dateA = moment(tanggalMulai, `YYYY-MM-DD`)
        const dateB = moment(tanggalSelesai, `YYYY-MM-DD`)
        const differenceInDays = moment(dateB).diff(dateA, 'days') + 1;

        const timeA = moment(waktuMulai, `HH:mm`)
        const timeB = moment(waktuSelesai, `HH:mm`)
        const durasiMinute = moment(timeB).diff(timeA, 'minutes')

        const totalDurasi = differenceInDays * durasiMinute

        const id = randomUUID()

        const create = await this.prismaService.kegiatan.create({
            data: {
                id: id,
                judulKegiatan: judulKegiatan,
                tanggalMulai: tanggalMulai,
                tanggalSelesai: tanggalSelesai,
                waktuMulai: waktuMulai,
                waktuSelesai: waktuSelesai,
                durasi: totalDurasi,
                proyekName: proyekName
            }
        })

        return {
            success: true,
            message: 'create data successfully',
            data: create
        }
    }

    async update(id: string, req: kegiatanRequest): Promise<WebResponse<kegiatanResponse | any>> {
        const {
            proyekName,
            judulKegiatan,
            tanggalMulai,
            tanggalSelesai,
            waktuMulai,
            waktuSelesai
        } = req
        const dateA = moment(tanggalMulai, `YYYY-MM-DD`)
        const dateB = moment(tanggalSelesai, `YYYY-MM-DD`)
        const differenceInDays = moment(dateB).diff(dateA, 'days') + 1;

        const timeA = moment(waktuMulai, `HH:mm`)
        const timeB = moment(waktuSelesai, `HH:mm`)
        const durasiMinute = moment(timeB).diff(timeA, 'minutes')

        const totalDurasi = differenceInDays * durasiMinute

        const update = await this.prismaService.kegiatan.update({
            where: { id: id },
            data: {
                id: id,
                judulKegiatan: judulKegiatan,
                tanggalMulai: tanggalMulai,
                tanggalSelesai: tanggalSelesai,
                waktuMulai: waktuMulai,
                waktuSelesai: waktuSelesai,
                durasi: totalDurasi,
                proyekName: proyekName
            }
        })

        return {
            success: true,
            message: 'update data successfully',
            data: update
        }
    }

    async delete(id: string): Promise<WebResponse<kegiatanResponse | any>> {
        const deleteData = await this.prismaService.kegiatan.delete({
            where: { id: id }
        })

        console.log(deleteData);

        return {
            success: true,
            message: 'delete data successfully'
        }
    }
}
