import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsDate,
  IsObject,
} from 'class-validator';

export class AddConcertDto {
  @IsNumber()
  @IsNotEmpty()
  placeId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  runningTime: number;

  @IsObject()
  @IsNotEmpty()
  seats: { [seatNumber: string]: string };

  @IsDate()
  @IsNotEmpty()
  showTime: Date;
}
