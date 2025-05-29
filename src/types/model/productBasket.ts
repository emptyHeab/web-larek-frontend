import { IModelWithEvents } from "./modelWithEvents";


export interface IProductBasket extends IModelWithEvents{
  productsList: IProductsList;
  addProduct(product:IProduct): void;
  deleteProduct(productId:string): void;
  deleteAllProducts(): void;
  getProductById(productId:string): IProduct|null;
  get total(): number;
  get summ(): number;
}