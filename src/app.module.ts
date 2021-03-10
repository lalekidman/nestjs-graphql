import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';

import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middlewares/logger.middleware';
@Module({
  imports: [
    BookModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/simple-nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
