import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { quotesProviders } from './quotes.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [QuotesController],
  providers: [
    QuotesService,
    ...quotesProviders,
  ],
})
export class QuotesModule {}