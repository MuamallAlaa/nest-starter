import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './prisma/prisma.module';
import { WinstonModule } from 'nest-winston';
import { UploadsModule } from './uploads/uploads.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { CaslModule } from './casl/casl.module';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    WinstonModule.forRoot({}),
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    CommonModule,
    UploadsModule,
    CaslModule,
    UsersModule,
    PermissionsModule,
  ],
})
export class AppModule {}
