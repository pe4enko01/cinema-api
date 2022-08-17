import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoDbConfig } from './config/iwt.config';
import { AythModule } from './ayth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: getMongoDbConfig
    }),
    AythModule,
    UserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
