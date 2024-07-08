import { PickType } from '@nestjs/mapped-types';

import { RegisterDto } from './register.dto';
export declare class LoginDto extends PickType(RegisterDto, [
  'email',
  'password',
] as const) {}
