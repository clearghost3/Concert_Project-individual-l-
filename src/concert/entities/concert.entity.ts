import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';

@Entity({
  name: 'concerts',
})
export class Concerts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  placeId: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  price: number;

  @Column({ type: 'int', nullable: true })
  runningTime: number;

  @Column('json')
  seats: { seatNumber: string; status: string }[];

  @Column({ type: 'int', nullable: true })
  showTime: number;
}
