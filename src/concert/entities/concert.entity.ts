import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Reservation } from 'src/reservation/entities/reservation.entity';
import { ConcertHall } from 'src/concerthall/entities/concerthall.entity';

@Entity({
  name: 'concerts',
})
export class Concert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  placeId: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  runningTime: number;

  @Column({ type: 'json', nullable: false })
  seats: { [seatNumber: string]: string };

  @Column({ type: 'int', nullable: false })
  showTime: number;

  @OneToMany(() => Reservation, (reservation) => reservation.concert)
  reservations: Reservation[];

  @ManyToOne(() => ConcertHall, (concerthall) => concerthall.concert)
  concerthall: ConcertHall;
}
