import { Module } from '@nestjs/common';
import { TutoradoService } from './tutorado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorado } from './entities/tutorado.entity';
import { TutoradoResolver } from './tutorado.resolver';

@Module({
  providers: [TutoradoResolver,TutoradoService],
  imports:[ TypeOrmModule.forFeature([
    Tutorado
  ])],
  exports:[ TutoradoService, TypeOrmModule ]
})
export class TutoradoModule {}
