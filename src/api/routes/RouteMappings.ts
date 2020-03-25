import { router as productRoutes } from './Products';
import { router as orderRoutes } from './Orders';
import { Route } from '../../extensions/modules';

/**
 * Contains all the routes and the controllers that they map to
 */
export const routeMappings: Route[] = [
  {
    route: '/product',
    router: productRoutes,
  },
  {
    route: '/order',
    router: orderRoutes,
  },
];
