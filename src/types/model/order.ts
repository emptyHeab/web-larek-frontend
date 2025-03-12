interface IOrder {
  payment: string;
  email: string;
  phone: string;
  address: string;
  get total(): number;
  items: IProductsList;
  validate(): string|null;
}

interface OrderParam {
  payment: string;
  email: string;
  phone: string;
  address: string;
  items: IProductsList;
}