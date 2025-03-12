import { Api } from "../base/api";

export class LarekApi implements IApi{
  protected api: Api

  constructor() {
    this.api = new Api('https://larek-api.nomoreparties.co/api/weblarek');
  }

  getProducts(): Promise<ProductData> {
  return this.api.get('/product/') as Promise<ProductData>;
  }

  postOrder(order:IOrder): Promise<OrderData> {
    return this.api.post('/order', order) as Promise<OrderData>;
  }
}