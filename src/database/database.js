import Sequelize from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config.js';

// export const sequelize = new Sequelize('prueba', 'postgres', 'homeroaleli', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// database: DB_NAME,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: DB_PORT,
export const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
});
