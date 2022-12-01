import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Quote extends Model {
  @Column
  departureLocation: string;

  @Column
  destinationLocation: string;

  @Column
  departureDate: string;

  @Column
  returnDate: string;

  @Column
  numberOfTravellers: string;

  @Column
  transportationDuringTravels: string;

  @Column
  contactInformation: string;
}
