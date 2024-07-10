import { Controller } from '@nestjs/common';

import { Body, Post, Put, Get, Patch, Param } from '@nestjs/common';

import { ConcerthallService } from './concerthall.service';

//Dto tile
import { AddConcertHallDto } from './dto/addconcerthall.dto';

@Controller('concerthall')
export class ConcerthallController {
  constructor(private readonly concertHallService: ConcerthallService) {}

  //로직 구현 파트
  //콘서트홀 추가
  @Post()
  async addConcertHall(addConcertHallDto: AddConcertHallDto) {
    return await this.concertHallService.addConcertHall(addConcertHallDto);
  }
}
