import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateQuoteDto } from 'src/dto/create-quote.dto';
import { QuotesService } from './quotes.service';

@Controller('/quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService) { }

    @Get()
    getQuotes() {
        return this.quotesService.findAll();
    }

    @Get('/find/:id')
    getQuote(@Param('id') id) {
        return this.quotesService.findQuote(id);
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto) {
        return this.quotesService.createQuote(createQuoteDto);
    }
}
