import { DataTypes} from 'sequelize';
import sequelize from '../config/dbconfig.js';
import priceListModel from './priceList.js';
import Terms from './terms.js';

const db= {};

db.PriceList = priceListModel(sequelize, DataTypes);
db.Terms = Terms(sequelize, DataTypes);

db.sequelize = sequelize;

export default db;