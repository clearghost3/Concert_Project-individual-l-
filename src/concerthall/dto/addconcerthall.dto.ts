import {
  IsNumber,
  IsString,
  IsArray,
  IsNotEmpty,
  ArrayNotEmpty,
  ArrayMinSize,
  IsDate,
} from 'class-validator';

export declare class AddConcertHallDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayNotEmpty()
  seats: string[];
}
