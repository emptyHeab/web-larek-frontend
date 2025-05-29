interface IProductsList {
  products: IProduct[];
  summ: number;
  addProduct(product: IProduct): void;
  deleteProduct(id:string): void; 
  getProductById(id:string): IProduct|null;
  length: number;
}