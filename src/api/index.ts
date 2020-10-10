import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import databaseMiddleWare from '../middlewares/databaseMiddlewares';

const app = express();
app.use(cors({origin:true}));
app.use(databaseMiddleWare);

// console.log('database middleware', databaseMiddleWare)
app.use(helmet());
app.use(express.json());

const routes = express.Router();

require('./user').default(routes);
require('./site_logs').default(routes);

app.use('/api', routes);

export default app;







