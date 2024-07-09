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

export declare class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
