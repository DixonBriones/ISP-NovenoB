import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TutoradoModule } from './tutorado/tutorado.module';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';

@Module({
  imports: [
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
    ssl: {
      ca: process.env.SSL_CERT,
    },
  }),
  TutoradoModule,
  MensajesWsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
