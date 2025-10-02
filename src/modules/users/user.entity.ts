import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from './enums/status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Column()
  location: string;

  @Column()
  age: number;
}
