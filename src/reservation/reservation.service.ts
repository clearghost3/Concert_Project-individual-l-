import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';

//Dto_tile
import { CreateReservationDto } from './dto/createreservation.dto';
import { RemoveReservationDto } from './dto/removereservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}
  //콘서트 예약
  async book(createReservationDto: CreateReservationDto) {
    return;
  }

  //콘서트 예약 취소
  async deleteBook(removeReservationDto: RemoveReservationDto) {
    return;
  }
}
