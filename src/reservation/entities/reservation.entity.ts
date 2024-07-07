import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  DeleteDateColumn,
} from 'typeorm';

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
}
