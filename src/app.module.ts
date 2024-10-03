import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuturesController } from './futures/futures.controller';
import { FuturesService } from './futures/futures.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CRUDService } from './shared/crud/crud.service';
import { BuyEntity } from './models/buy.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [BuyEntity],
      synchronize: true,
   }),
   TypeOrmModule.forFeature([BuyEntity])
  ],
  controllers: [AppController, FuturesController],
  providers: [AppService, FuturesService],
})
export class AppModule {}
