import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthlocalService } from './authlocal.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from '../../auth/auth.decorators';

@Controller('authlocal')
export class AuthlocalController {
  constructor(private readonly authlocalService: AuthlocalService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authlocalService.login(req.user);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Request() req) {
    console.log(req.user.username, ' logged out successfully.');
    return;
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
