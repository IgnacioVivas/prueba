import Sequelize from 'sequelize';

// export const sequelize = new Sequelize('prueba', 'postgres', 'homeroaleli', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

export const sequelize = new Sequelize({
  database: 'railway',
  username: 'postgres',
  password: 'aH4A5k105L3Npd3P3MgK',
  host: 'containers-us-west-104.railway.app',
  port: 6434,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
});
