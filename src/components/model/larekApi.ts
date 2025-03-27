import { Api } from "../base/api";

export class LarekApi implements IApi{
  private _api: Api;

  constructor() {
    this._api = new Api('https://larek-api.nomoreparties.co/api/weblarek');
  }

  getProducts(): Promise<ProductData> {
  return this._api.get('/product/') as Promise<ProductData>;
  }

  postOrder(order:IOrder): Promise<OrderData> {
    return this._api.post('/order', order) as Promise<OrderData>;
  }
}