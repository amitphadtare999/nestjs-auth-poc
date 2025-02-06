import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SigninDto): Promise<{ access_token: string }> {
    const user = await this.userService.findByUsername(signInDto.username);

    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException('Credentials not matched');
    }
    const { password, ...restUser } = user;
    console.log({ password });
    return { access_token: await this.jwtService.signAsync(restUser) };
  }
}
