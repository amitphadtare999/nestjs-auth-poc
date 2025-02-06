import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthlocalService } from './authlocal.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authlocalService: AuthlocalService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authlocalService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
