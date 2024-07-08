import { Concert } from 'src/concert/entities/concert.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity({
  name: 'concert_hall',
})
export class ConcertHall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'simple-array', nullable: false })
  seats: string[];

  @OneToMany(() => Concert, (concert) => concert.concerthall)
  concert: Concert;
}
