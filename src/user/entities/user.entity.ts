import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Role } from '../types/userRole.type';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class User {
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

  @Column({ type: 'int', nullable: false, default: 50000 })
  point: number;

  @CreateDateColumn({ type: 'date', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'date', nullable: true })
  DeletedAt: Date;
}
