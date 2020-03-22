import * as express from 'express';
import { productsController } from '../controllers/ProductsController';

const router: express.Router = express.Router();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);
router.get('/:productId', productsController.getProduct);
router.patch('/:productId', productsController.updateProduct);
router.delete('/:productId', productsController.removeProduct);

export { router };
