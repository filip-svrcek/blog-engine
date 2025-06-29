import { Module } from '@nestjs/common';
import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';
import { VotesGateway } from './votes.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VotesResolver } from './votes.resolver';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [VotesController],
  providers: [VotesService, VotesGateway, VotesResolver],
})
export class VotesModule {}
