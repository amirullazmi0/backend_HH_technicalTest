import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProyekService } from './proyek.service';
import { WebResponse } from 'src/model/web.model';
import { proyekRequest, proyekResponse } from 'src/model/proyek.model';

@Controller('/api/proyek')
export class ProyekController {
    constructor(
        private proyekService: ProyekService
    ) { }

    @Get()
    async findAll(): Promise<WebResponse<proyekResponse | any>> {
        return await this.proyekService.findAll()
    }

    @Post()
    async create(
        @Body() req: proyekRequest
    ): Promise<WebResponse<proyekResponse | any>> {
        return this.proyekService.create(req)
    }
}
