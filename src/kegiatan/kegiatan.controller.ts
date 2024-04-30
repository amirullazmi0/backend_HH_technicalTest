import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { KegiatanService } from './kegiatan.service';
import { WebResponse } from 'src/model/web.model';
import { kegiatanRequest, kegiatanResponse } from 'src/model/kegiatan.model';

@Controller('/api/kegiatan')
export class KegiatanController {
    constructor(
        private kegiatanService: KegiatanService
    ) { }

    @Get()
    async findAll(
        @Query('name') name: string,
        @Body() req: Request
    ): Promise<WebResponse<kegiatanResponse[]>> {
        return await this.kegiatanService.findAll(name)
    }

    @Post()
    async create(
        @Body() req: kegiatanRequest
    ): Promise<WebResponse<kegiatanResponse>> {
        return await this.kegiatanService.create(req)
    }

    @Put(`/:id`)
    async update(
        @Param('id') id: string,
        @Body() req: kegiatanRequest
    ): Promise<WebResponse<kegiatanResponse>> {
        return await this.kegiatanService.update(id, req)
    }

    @Delete()
    async delete(
        @Body('id') id: string
    ): Promise<WebResponse<kegiatanResponse | any>> {
        return await this.kegiatanService.delete(id)
    }
}
