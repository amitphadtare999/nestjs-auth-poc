import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  findByUsername(username: string): Promise<User> {
    return this.usersRepo.findOne({ where: { username } });
  }
}
