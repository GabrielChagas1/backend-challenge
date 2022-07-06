import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './modules/place.module';

@Module({
  imports: [
    PlaceModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sql',
      synchronize: true,
      entities: ['dist/**/*.model.js'],
    }),
  ],
})
export class AppModule {}
