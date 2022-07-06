import { IsString } from 'class-validator';

export class PlaceUpdateSchema {
  @IsString()
  location: string;

  @IsString()
  meta: string;
}
