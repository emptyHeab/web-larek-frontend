import { IOrder } from "./order";
import { IProductBasket } from "./productBasket";

export type ProductData = {
  total:number;
  items:IProduct[];
}

export type OrderResponseData = {
  id:string;
  total:number;
}

export interface IApi {
  getProducts(): Promise<ProductData>;
  postOrder(data:IOrder, basket:IProductBasket): Promise<OrderResponseData>;
}