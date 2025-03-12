export class ProductBasket implements IProductBasket {
  products: IProductsList;

  constructor(productList:IProductsList){
    
  }

  addProduct(product:IProduct): void {

  }
  
  deleteProduct(productId:string): void {

  }

  isProductInBasket(productId:string): boolean {
    return false;
  }

  get total(): number {
    return 0;
  }

  get summ(): number {
    return 0;
  }
}