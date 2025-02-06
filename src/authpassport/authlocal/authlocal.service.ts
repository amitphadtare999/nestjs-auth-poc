import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthlocalService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
      // const token = await this.jwtService.signAsync(result);
      // return { token };
    }
    return null;
  }

  async login(user: any) {
    const payload = user;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
