import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm/browser';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: MongoRepository<UserEntity>,
  ) {}

  // find user by email
  async findOneBy(email: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ email: email });
  }

  // create user
  async create(user: Partial<UserEntity>): Promise<any> {
    const newUser = this.usersRepository.create({
      ...user,
      createdAt: new Date(),
    });
    return this.usersRepository.save(newUser);
  }
}
