import * as express from 'express';
import { ordersController } from '../controllers/OrdersController';

const router: express.Router = express.Router();

router.get('/', ordersController.getOrders);
router.post('/', ordersController.createOrder);
router.get('/:orderId', ordersController.getOrder);
router.delete('/:orderId', ordersController.deleteOrder);

export {
    router
};
