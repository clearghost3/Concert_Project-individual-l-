import { PickType } from '@nestjs/mapped-types';

import { AddConcertDto } from './addconcert.dto';

export declare class RemoveConcertDto extends PickType(AddConcertDto, [
  'placeId',
  'name',
]) {}
