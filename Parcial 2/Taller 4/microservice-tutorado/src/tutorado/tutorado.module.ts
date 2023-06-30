import { Module } from '@nestjs/common';
import { TutoradoService } from './tutorado.service';
import { TutoradoSchema } from './schema/tutorado.schema';
import { TUTORADO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { TutoradoController } from './tutorado.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TUTORADO.name,
        useFactory: () => TutoradoSchema,
      },
    ]),
  ],
  controllers: [TutoradoController],
  providers: [TutoradoService],
})
export class TutoradoModule {}
