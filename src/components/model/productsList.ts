class ProductsList implements IProductsList {
 private _products: IProduct[];
 
 addProduct(product: IProduct): void {
   
 }

 deleteProduct(id: number): void {
   
 }

  containProduct(id:number): boolean {
    return false;
  }

  get length(): number {
    return this.products.length;
  }

	public get products(): IProduct[] {
		return this._products;
	}

	public set products(value: IProduct[]) {
		this._products = value;
	}

}