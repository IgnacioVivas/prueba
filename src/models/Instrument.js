import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Article } from './Article.js';

export const Instrument = sequelize.define(
  'instrument',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timesTamps: true,
  }
);

Instrument.hasMany(Article, {
  foreignKey: 'instrumentId',
  sourceKey: 'id',
});

Article.belongsTo(Instrument, {
  foreignKey: 'instrumentId',
  targetId: 'id',
});
