import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import * as morgan from 'morgan'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';
import { UserModule } from './users/users.module';

import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    //@modules
    BookModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/simple-nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        morgan('dev'),
      )
      .forRoutes({
        path: '/',
        method: RequestMethod.ALL
      })
  }
}
