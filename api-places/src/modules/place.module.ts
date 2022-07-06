import { Module } from '@nestjs/common';
import { PlaceController } from 'src/controllers/place.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModel } from '../models/place.model';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceModel])],
  controllers: [PlaceController],
})
export class PlaceModule {}
