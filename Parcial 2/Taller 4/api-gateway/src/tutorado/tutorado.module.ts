import { Module } from '@nestjs/common';
import { TutoradoController } from './tutorado.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [TutoradoController]
})
export class TutoradoModule {}
