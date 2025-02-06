import { Module } from '@nestjs/common';
import { AuthlocalModule } from './authlocal/authlocal.module';
import { AuthldapModule } from './authldap/authldap.module';

@Module({
  imports: [AuthlocalModule, AuthldapModule],
})
export class AuthpassportModule {}
