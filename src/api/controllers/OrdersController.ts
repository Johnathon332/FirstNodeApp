import { Response, Request } from 'express-serve-static-core';

class OrdersController {
  constructor() {}

  getOrders(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Orders were fetched',
    });
  }

  getOrder(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Order details',
      orderId: request.params.orderId,
    });
  }

  createOrder(request: Request, response: Response): void {
    const order = {
      productId: request.body.productId,
      quantity: request.body.quantity,
    };

    response.status(201).json({
      message: 'Order was created',
      order,
    });
  }

  deleteOrder(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Order deleted',
      orderId: request.params.orderId,
    });
  }
}

const ordersController: OrdersController = new OrdersController();
export { ordersController };
