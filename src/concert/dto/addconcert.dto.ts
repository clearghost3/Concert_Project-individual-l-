import {
  IsNumber,
  IsString,
  IsArray,
  IsNotEmpty,
  ArrayNotEmpty,
  ArrayMinSize,
  IsDate,
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

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true }) //배열의 요소들이 각각 문자열인지 확인함
  seats: string[];

  @IsDate()
  @IsNotEmpty()
  showTime: Date;
}
