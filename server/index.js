import Fastify from 'fastify';
import sequelize from './config/dbconfig.js';
import productListRoute from './routes/priceListRoute.js';
import fastifyCors from "@fastify/cors";
import db from './models/index.js';


const app = Fastify( {logger: true } );

app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

app.register(fastifyCors, {
  origin: '*'
});

app.decorate('db', db);


app.register(productListRoute, { prefix: '/' });

const start = async () => {

  try {
    await db.sequelize.authenticate();
    app.log.info('Database Connected successfully.');

    await db.sequelize.sync({ alter: true });

    
    await app.listen({ port: 3005, host:'0.0.0.0'});

    app.log.info('Server is running on http://localhost:3005');

  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();


