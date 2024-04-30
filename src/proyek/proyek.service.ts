import { Injectable } from '@nestjs/common';
import { proyekRequest, proyekResponse } from 'src/model/proyek.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProyekService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findAll(): Promise<WebResponse<proyekResponse | any>> {
        const proyek = await this.prismaService.proyek.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })
        return {
            success: true,
            message: 'get data successfully',
            data: proyek
        }
    }

    async create(req: proyekRequest): Promise<WebResponse<proyekResponse | any>> {
        const { name } = req

        const createData = await this.prismaService.proyek.create({
            data: { name: name }
        })
        return {
            success: true,
            message: 'create data successfully',
            data: createData
        }
    }
}
