interface IProductBasket {
  products: IProductsList;
  addProduct(product:IProduct): void;
  deleteProduct(productId:string): void;
  isProductInBasket(productId:string): boolean;
  get total(): number;
  get summ(): number;
}