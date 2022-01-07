import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';
import { ResultsModule } from './results/results.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_URL, {
      dbName: process.env.DATABASE_NAME,
    }),
    QuestionsModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
