import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsController';

// index, show, create, update, delete
const routes  = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);

routes.post('/points:/id', pointsController.show);

export default routes;