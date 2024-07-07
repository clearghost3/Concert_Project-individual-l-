import { Module } from '@nestjs/common';
import { ConcerthallService } from './concerthall.service';
import { ConcerthallController } from './concerthall.controller';

@Module({
  providers: [ConcerthallService],
  controllers: [ConcerthallController]
})
export class ConcerthallModule {}
