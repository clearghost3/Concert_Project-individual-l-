import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

//entity
import { ConcertHall } from './entities/concerthall.entity';

//Dto tile
import { AddConcertHallDto } from './dto/addconcerthall.dto';

@Injectable()
export class ConcerthallService {
  constructor(
    @InjectRepository(ConcertHall)
    private readonly concertHallRepository: Repository<ConcertHall>,
  ) {}

  //콘서트 홀 추가
  async addConcertHall(addConcertHallDto: AddConcertHallDto) {
    return;
  }
}
