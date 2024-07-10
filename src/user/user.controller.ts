import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Dto tile
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //회원가입
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(
      registerDto.nickname,
      registerDto.email,
      registerDto.password,
      registerDto.role,
      registerDto.age,
    );
  }

  //로그인
  @Post('Login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto.email, loginDto.password);
  }

  //정보 확인
  @Get('')
  async userInfoCheck() {
    return await this.userService.userInfoCheck();
  }
}
