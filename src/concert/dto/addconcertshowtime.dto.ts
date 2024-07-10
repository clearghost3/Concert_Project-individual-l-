import { AddConcertDto } from './addconcert.dto';
import { PickType } from '@nestjs/mapped-types';

export declare class AddConcertShowtimeDto extends PickType(AddConcertDto, [
  'name',
  'placeId',
  'showTime',
] as const) {}

//영화의 이름을 찾고, 비슷한 영화의 예약 일정을 추가,
//영화 시작시간과 장소는 바뀔 수 있기에 정보 수집
