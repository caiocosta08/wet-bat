import { Sequelize } from 'sequelize-typescript';
import { Quote } from 'src/quotes/quotes.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      });
      sequelize.addModels([Quote]);
      await sequelize.sync();
      return sequelize;
    },
  },
];