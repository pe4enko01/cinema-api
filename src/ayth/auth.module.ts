import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AythController } from './auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AythController]
})
export class AythModule {}
