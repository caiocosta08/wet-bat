import { IsNotEmpty, IsNumber, IsDate, IsString, MinDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateQuoteDto {

  @IsNotEmpty()
  @IsString()
  departureLocation: string;

  @IsNotEmpty()
  @IsString()
  destinationLocation: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  departureDate: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  returnDate: Date;

  @IsNotEmpty()
  @IsNumber()
  numberOfTravellers: number;

  @IsNotEmpty()
  @IsString()
  transportationDuringTravels: string;

  @IsNotEmpty()
  @IsString()
  contactInformation: string;
};
