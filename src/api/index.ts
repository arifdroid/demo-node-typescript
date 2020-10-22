import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import databaseMiddleWare from '../middlewares/databaseMiddlewares';
import { authMiddleware } from '../middlewares/authMiddlewares';

const app = express();
app.use(cors({origin:true}));
app.use(databaseMiddleWare);
app.use(authMiddleware);
app.use(helmet());
app.use(express.json());

const routes = express.Router();

require('./user').default(routes);
require('./site_logs').default(routes);
require('./workforces').default(routes);
require('./tools').default(routes);
require('./materials').default(routes);
require('./auth').default(routes);


app.use('/api', routes);

export default app;







