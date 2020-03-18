import { Response, Request } from 'express-serve-static-core';

class ProductsController {
  constructor() {}

  public getAllProducts(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Handling GET requests to /products',
    });
  }

  public getProduct(request: Request, response: Response): void {
    const id = request.params.productId;
    if (id === 'special') {
      response.status(200).json({
        message: 'You duscivered the special Id',
        id,
      });
    } else {
      response.status(200).json({
        message: 'You passed an ID',
      });
    }
  }

  public createProduct(request: Request, response: Response): void {
    const product = {
      name: request.body.name,
      price: request.body.price,
    };
    response.status(201).json({
      message: 'Handling POST requests to /products',
      createdProduct: product,
    });
  }

  public updateProduct(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Updated product!',
    });
  }

  public removeProduct(request: Request, response: Response): void {
    const id: number = (request.params.productId as unknown) as number;

    response.status(200).json({
      message: 'Deleted product',
      id,
    });
  }
}

const productsController: ProductsController = new ProductsController();
export { productsController };
