import { IsString } from 'class-validator';

export class PlaceSchema {
  @IsString()
  country: string;

  @IsString()
  url: string;

  @IsString()
  location: string;

  @IsString()
  meta: string;
}
