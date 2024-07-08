import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

import { Role } from '../types/userRole.type';

export class RegisterDto {
  @IsNotEmpty()
  nickname: string;

  @IsEmail()
  @IsNotEmpty({ message: '이메일 입력이 필요합니다!' })
  email: string;

  @IsNotEmpty({ message: '비밀번호 입력이 필요합니다!' })
  password: string;

  role: Role;

  @IsNotEmpty({ message: '나이를 입력 해주세요' })
  age: number;
}
