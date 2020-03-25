import { Response, Request } from 'express-serve-static-core';
import { Order } from '../models/Order';
import { Repository, getRepository, In } from 'typeorm';
import { Product } from '../models/Product';
import { CustomRequest } from '../../extensions/modules';
import { OrderPayload } from '../models/requests/OrderPayload';

class OrdersController {
  constructor() {}

  public getOrders(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Orders were fetched',
    });
  }

  public getOrder(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Order details',
      orderId: request.params.orderId,
    });
  }

  public async createOrder(
    request: CustomRequest<OrderPayload>,
    response: Response
  ): Promise<void> {
    const order: Order = new Order();

    order.products = request.body.products;

    const savedOrder: Order = await getRepository(Order).save(order);

    response.status(201).json({
      message: 'Order was created',
      savedOrder,
    });
  }

  public deleteOrder(request: Request, response: Response): void {
    response.status(200).json({
      message: 'Order deleted',
      orderId: request.params.orderId,
    });
  }
}

const ordersController: OrdersController = new OrdersController();
export { ordersController };
