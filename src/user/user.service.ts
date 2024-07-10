import { compare, hash } from 'bcrypt';
import _ from 'lodash';
import { Repository } from 'typeorm';

import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';

import { Role } from './types/userRole.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  //회원가입 로직
  async register(
    nickname: string,
    email: string,
    password: string,
    role: Role,
    age: number,
  ) {}

  //로그인 로직
  async login(email: string, password: string) {}

  //유저 정보 확인 로직
  async userInfoCheck() {}
}
