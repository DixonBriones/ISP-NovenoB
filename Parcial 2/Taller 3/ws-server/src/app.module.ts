import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TutoradoModule } from './tutorado/tutorado.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
  ConfigModule.forRoot(),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    plugins:[
      ApolloServerPluginLandingPageLocalDefault()
    ]
  }),
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
  TutoradoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
