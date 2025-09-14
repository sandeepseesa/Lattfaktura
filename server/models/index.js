import { DataTypes} from 'sequelize';
import sequelize from '../config/dbconfig.js';
import priceListModel from './priceList.js';

const db= {};

db.PriceList = priceListModel(sequelize, DataTypes);

db.sequelize = sequelize;

export default db;