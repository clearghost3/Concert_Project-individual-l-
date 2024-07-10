import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

//DI
import { ConcertService } from './concert.service';

//dto tile
import { AddConcertDto } from './dto/addconcert.dto';
import { AddConcertShowtimeDto } from './dto/addConcertshowtime.dto';
import { RemoveConcertShowTimeDto } from './dto/removeconcert_showtime.dto';
import { RemoveConcertDto } from './dto/removeconcert.dto';

@Controller('concert')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  // 공연 추가
  @Post('create')
  async create(@Body() addConcertDto: AddConcertDto) {
    return await this.concertService.create(addConcertDto);
  }

  //공연 삭제
  @Delete('delete')
  async delete(@Body() removeConcertDto: RemoveConcertDto) {
    return await this.concertService.delete(removeConcertDto);
  }

  // 공연_상영일정 추가
  @Post('add_showtime')
  async addShowTime(@Body() addConcertDto: AddConcertDto) {
    return await this.concertService.addShowTime(addConcertDto);
  }

  //공연_상영일정 제거
  @Post('remove_showtime')
  async removeShowTime(@Body() removeShowTimeDto: RemoveConcertShowTimeDto) {
    return await this.concertService.remove(removeShowTimeDto);
  }

  //공연 목록 조회
  @Get('')
  async checkConcert() {
    return await this.concertService.check();
  }
}
