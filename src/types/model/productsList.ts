interface IProductsList {
  products: IProduct[];
  addProduct(product: IProduct): void;
  deleteProduct(id:number): void; 
  containProduct(id:number): boolean;
  get length(): number;
}