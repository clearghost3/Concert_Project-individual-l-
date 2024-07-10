import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

//DI
import { InjectRepository } from '@nestjs/typeorm';

//Dto
import { AddConcertDto } from './dto/addconcert.dto';
import { AddConcertShowtimeDto } from './dto/addConcertshowtime.dto';
import { RemoveConcertShowTimeDto } from './dto/removeconcert_showtime.dto';
import { RemoveConcertDto } from './dto/removeconcert.dto';

@Injectable()
export class ConcertService {
  //콘서트 생성
  async create(addConcertDto: AddConcertDto) {}

  //콘서트 삭제
  async delete(removeConcertDto: RemoveConcertDto) {}

  //콘서트 특정 장소의 일정 추가
  async addShowTime(addConcertShowtime: AddConcertShowtimeDto) {}

  //특정 장소의 콘서트 전부 삭제
  async remove(RemoveConcertShowTimeDto: RemoveConcertShowTimeDto) {}

  //콘서트 조회
  async check() {}
}
