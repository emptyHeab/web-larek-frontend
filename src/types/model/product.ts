enum ProductCategory {
  'софт-скил',
  'другое',
  'дополнительное',
  'кнопка',
  'хард-скил'
}

interface ProductParam {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number;
}

interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: ProductCategory;
  price: number;
}