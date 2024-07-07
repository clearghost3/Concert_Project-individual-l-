import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { Role } from '../types/userRole.type';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
  email: string;

  @Column({ type: 'varchar', select: false, length: 50, nullable: true })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'int', nullable: false })
  point: number;

  @Column({ type: 'date', nullable: true })
  createdAt: Date;

  @Column({ type: 'date', nullable: false })
  updatedAt: Date;
}
