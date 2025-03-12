type ProductData = {
  total:number;
  items:IProduct[];
}

type OrderData = {
  id:string;
  total:number;
}

interface IApi {
  getProducts(): Promise<ProductData>;
  postOrder(data:IOrder): Promise<OrderData>;
}