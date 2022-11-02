import Sequelize from 'sequelize';

export const sequelize = new Sequelize('prueba', 'postgres', 'homeroaleli', {
  host: 'localhost',
  dialect: 'postgres',
});
