import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentModule } from './tournament/tournament.module';
import { PlayersModule } from './players/players.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [TournamentModule, PlayersModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
