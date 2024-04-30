import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { WebResponse } from 'src/model/web.model';
import { reqUser, userResponse } from 'src/model/user.model';

@Controller('/api/user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getOne(): Promise<WebResponse<userResponse>> {
        return await this.userService.findOne()
    }

    @Post()
    async create(
        @Body() req: reqUser
    ): Promise<WebResponse<userResponse>> {
        return await this.userService.create(req)
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() req: reqUser
    ): Promise<WebResponse<userResponse>> {
        return await this.userService.update(id, req)
    }

    @Delete()
    async delete(
        @Body('id') id: string
    ): Promise<WebResponse<userResponse>> {
        return await this.userService.delete(id)
    }
}
