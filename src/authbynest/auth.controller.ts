import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { Public } from './auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signInWithUsernamePassword(@Body() signInDto: SigninDto) {
    return this.authService.signIn(signInDto);
    // return this.userService.findByUsername('amit');
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
