import { OrderToProduct } from '../entities/OrderToProduct';

export interface OrderPayload {
  products: OrderToProduct[];
}
