import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { randomUUID } from 'crypto';
import { reqUser, userResponse } from 'src/model/user.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findOne(): Promise<WebResponse<userResponse | any>> {

        let user = await this.prismaService.user.findMany()

        if (!user) {
            return {
                success: false,
                message: 'user not found'
            }
        }

        return {
            success: true,
            message: 'get data successfully',
            data: user[0]
        }
    }

    async create(req: reqUser): Promise<WebResponse<userResponse | any>> {
        const id = randomUUID()
        const { fullName, rate } = req
        const create = await this.prismaService.user.create({
            data: {
                id: id,
                fullName: fullName,
                rate: rate
            }
        })
        return {
            success: true,
            message: 'post data successfully',
            data: create
        }

    }

    async update(id: string, req: reqUser): Promise<WebResponse<userResponse | any>> {
        let user = await this.prismaService.user.findUnique({
            where: { id: id }
        })

        if (!user) {
            return {
                success: false,
                message: 'update data failed'
            }
        }

        const { fullName, rate } = req

        const userUpdate = await this.prismaService.user.update({
            where: { id: id },
            data: {
                fullName: fullName ? fullName : user.fullName,
                rate: rate ? rate : user.rate
            }
        })
        return {
            success: true,
            message: 'post data successfully',
            data: userUpdate
        }
    }

    async delete(id: string) {
        let user = await this.prismaService.user.findUnique({
            where: { id: id }
        })

        if (!user) {
            return {
                success: false,
                message: 'delete data failed'
            }
        }

        const deleteUser = await this.prismaService.user.delete({
            where: { id: id }
        })

        console.log(deleteUser);

        return {
            success: true,
            message: 'delete data successfully',
        }
    }
}
