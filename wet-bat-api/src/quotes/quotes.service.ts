import { Injectable, Inject } from '@nestjs/common';
import { CreateQuoteDto } from 'src/dto/create-quote.dto';
// import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './quotes.entity';

@Injectable()
export class QuotesService {
    constructor(
        @Inject('QUOTES_REPOSITORY')
        private quotesRepository: typeof Quote
    ) { }

    async findAll() {
        return this.quotesRepository.findAll<Quote>();
    }

    async findQuote(id: string) {
        if (!id) return { error: "Id needed to find quote." }
        const quote = await this.quotesRepository.findOne({ where: { id } });
        if (!quote) return { message: "Quote not found." }
        return quote;
    }

    async createQuote(quote: CreateQuoteDto) {
        if (!quote) return { error: "Missing params to create quote." }
        if (quote.returnDate <= quote.departureDate) return { error: "Invalid returnDate." }
        const createdQuote = await this.quotesRepository.create<Quote>({ ...quote });
        if (!createdQuote) return { error: "Quote not created." }
        return createdQuote;
    }
}