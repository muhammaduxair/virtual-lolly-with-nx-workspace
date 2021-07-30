import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import Config from './config/keys';
import { CreateLollySchema } from './Schema/createLolly.schema';

@Module({
  imports: [
    MongooseModule.forRoot(Config.MongoDB_URI),
    MongooseModule.forFeature([{ name: 'Lollies', schema: CreateLollySchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
