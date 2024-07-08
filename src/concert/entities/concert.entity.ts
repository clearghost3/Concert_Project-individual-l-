import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';

import { Reservation } from 'src/reservation/entities/reservation.entity';

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
  seats: { seatNumber: string; status: string }[];

  @Column({ type: 'int', nullable: false })
  showTime: number;

  @OneToMany(() => Reservation, (reservation) => reservation.concert)
  reservations: Reservation[];
}
