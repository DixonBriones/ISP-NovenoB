import { Module } from '@nestjs/common';
import { TutoradoService } from './tutorado.service';
import { TutoradoController } from './tutorado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorado } from './entities/tutorado.entity';

@Module({
  controllers: [TutoradoController],
  providers: [TutoradoService],
  imports:[ TypeOrmModule.forFeature([
    Tutorado
  ])]
})
export class TutoradoModule {}
