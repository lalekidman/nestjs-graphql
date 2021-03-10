import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';

import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
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
