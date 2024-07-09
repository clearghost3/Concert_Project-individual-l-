import { PickType } from '@nestjs/mapped-types';

import { CreateUserDto } from './createuser.dto';

export declare class RemoveUserDto extends PickType(CreateUserDto, ['email']) {}
