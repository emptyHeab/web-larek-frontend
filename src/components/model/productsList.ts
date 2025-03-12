class ProductsList implements IProductsList {
 products: IProduct[];
 
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
}