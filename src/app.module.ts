import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
import { AuthpassportModule } from './authpassport/authpassport.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      autoLoadEntities: true,
    }),
    UsersModule,
    // AuthModule,
    AuthpassportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
