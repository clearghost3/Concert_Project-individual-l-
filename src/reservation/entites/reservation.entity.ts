import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';

@Entity({
  name: 'reservation',
})
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  userId: number;

  @Column({ type: 'int', nullable: true })
  concertId: number;

  @Column({ type: 'varchar', nullable: true })
  seat: string;

  @Column({ type: 'datetime', nullable: true })
  showTime: Date;

  @Column({ type: 'datetime', nullable: true })
  endTime: Date;

  @Column({ type: 'date', nullable: true })
  createdAt: Date;

  @Column({ type: 'date', nullable: false })
  deletedAt: Date;
}
