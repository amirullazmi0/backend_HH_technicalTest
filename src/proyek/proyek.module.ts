import { Module } from '@nestjs/common';
import { ProyekController } from './proyek.controller';
import { ProyekService } from './proyek.service';

@Module({
  controllers: [ProyekController],
  providers: [ProyekService]
})
export class ProyekModule {}
