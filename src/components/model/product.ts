export class Product implements IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: ProductCategory;
  price: number;

  constructor({id, description, image, title, category, price}:ProductParam) {
    
  }
}