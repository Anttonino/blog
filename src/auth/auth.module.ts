import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../users/user.module';
import { jwtConstants } from './constants/constants';
import { Bcrypt } from './entities/bcrypt/bcrypt';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register ({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [Bcrypt, AuthService, LocalStrategy],
  controllers: [],
  exports: [Bcrypt],
})
export class AuthModule { }