import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsController';

const routes  = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index)
routes.post('/points:/id', pointsController.show);

export default routes;