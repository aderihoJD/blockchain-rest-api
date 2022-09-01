import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChainModule } from './chain/chain.module';

@Module({
  imports: [ChainModule, MongooseModule.forRoot('mongodb://localhost/nestChainDB')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
