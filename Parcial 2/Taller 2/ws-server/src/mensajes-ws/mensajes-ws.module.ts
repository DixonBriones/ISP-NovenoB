import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { TutoradoModule } from '../tutorado/tutorado.module';

@Module({
  providers: [MensajesWsService,MensajesWsGateway],
  imports:[TutoradoModule]
})
export class MensajesWsModule {}
