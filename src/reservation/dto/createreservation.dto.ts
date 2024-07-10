import {
  IsNumber,
  IsString,
  IsArray,
  IsNotEmpty,
  ArrayNotEmpty,
  ArrayMinSize,
  IsDate,
  IsEmail,
  IsEnum,
} from 'class-validator';

import { Role } from 'src/user/types/userRole.type';

export declare class CreateReservationDto {
  @IsNotEmpty({})
  @IsNumber()
  userId: number;

  @IsNotEmpty({})
  @IsNumber()
  concertId: number;

  @IsNotEmpty({})
  @IsString()
  seat: string;
}
