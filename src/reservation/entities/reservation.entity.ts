import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from 'src/user/entities/user.entity';
import { Concert } from 'src/concert/entities/concert.entity';

@Entity({
  name: 'reservation',
})
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  @Index()
  userId: number;

  @Column({ type: 'int', nullable: false })
  @Index()
  concertId: number;

  @Column({ type: 'varchar', nullable: false })
  seat: string;

  @Column({ type: 'timestamp', nullable: false })
  showTime: Date;

  @Column({ type: 'timestamp', nullable: false })
  endTime: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.reservations, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Concert, (concert) => concert.reservations, {
    onDelete: 'CASCADE',
  })
  concert: Concert;
}
