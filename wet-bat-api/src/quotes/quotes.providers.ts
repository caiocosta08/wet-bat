import { Quote } from './quotes.entity';

export const quotesProviders = [
  {
    provide: 'QUOTES_REPOSITORY',
    useValue: Quote,
  },
];