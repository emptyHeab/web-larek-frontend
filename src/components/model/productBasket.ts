export class ProductBasket implements IProductBasket {
  private _products: IProductsList;

  constructor(productList:IProductsList) {
    
  }

  addProduct(product:IProduct): void {

  }
  
  deleteProduct(productId:string): void {

  }

  deleteAllProducts(): void {
    
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

  public get products(): IProductsList {
		return this._products;
	}

	public set products(value: IProductsList) {
		this._products = value;
	}
}