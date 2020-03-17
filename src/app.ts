import * as express from 'express';
import * as morgan from 'morgan';
import { ResponseError } from './extensions/modules';
import { Response, NextFunction, Request } from 'express-serve-static-core';
import { router as productRoutes } from './api/routes/Products';
import { router as orderRoutes } from './api/routes/Orders';

const app: express.Application = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: ResponseError = new Error('Not found') as ResponseError;
  error.status = 404;
  next(error);
});

app.use(
  (error: ResponseError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      error: {
        message: error.message,
      },
    });
  }
);

export { app };
