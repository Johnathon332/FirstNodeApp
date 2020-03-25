import * as express from 'express';
import * as morgan from 'morgan';
import { ResponseError, Route } from './extensions/modules';
import { Response, NextFunction, Request } from 'express-serve-static-core';
import { createConnection } from 'typeorm';
import { routeMappings } from './api/routes/RouteMappings';

/**
 * Wrapper around the express application, and builds the express application based
 * on the users needs
 */
export class Application {
  /**
   * The express application itself
   */
  private app: express.Application;

  /**
   * This does initialisation work on the express application
   */
  constructor() {
    createConnection().then(() => {
      this.app = express();

      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(express.json());

      routeMappings.forEach((routeMapping: Route) => {
        this.app.use(routeMapping.route, routeMapping.router);
      });

      this.app.use((req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if (req.method === 'OPTIONS') {
          res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
          );
          return res.status(200).json({});
        }
        return next();
      });

      this.app.use((req: Request, res: Response, next: NextFunction) => {
        const error: ResponseError = new Error('Not found') as ResponseError;
        error.status = 404;
        next(error);
      });

      this.app.use(
        (
          error: ResponseError,
          req: Request,
          res: Response,
          next: NextFunction
        ) => {
          res.status(error.status || 500).json({
            error: {
              message: error.message,
            },
          });
        }
      );
    });
  }

  /**
   * Enables dev logging
   */
  public enableLogging(): Application {
    this.app.use(morgan('dev'));
    return this;
  }

  /**
   * Builds the application
   */
  public build(): express.Application {
    return this.app;
  }
}

// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);

const app: Application = new Application();
export { app };
