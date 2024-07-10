import { Body, Post, Put, Get, Delete, Patch, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ReservationService } from './reservation.service';

//Dto tile
import { CreateReservationDto } from './dto/createreservation.dto';
import { RemoveReservationDto } from './dto/removereservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  //로직 구현 타일----------------
  //예약 조회
  @Get()
  async check() {
    return await this.reservationService.check();
  }

  //에약 추가
  @Post()
  async book(createReservationDto: CreateReservationDto) {
    return await this.reservationService.book(createReservationDto);
  }

  //예약 취소
  @Delete()
  async deleteBook(removeReservationDto: RemoveReservationDto) {
    return await this.reservationService.deleteBook(removeReservationDto);
  }
}
