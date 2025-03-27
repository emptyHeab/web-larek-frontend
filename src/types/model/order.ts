interface IOrder {
  payment: string;
  email: string;
  phone: string;
  address: string;
  validate(): string|null;
}

interface OrderParam {
  payment: string;
  email: string;
  phone: string;
  address: string;
  items: string[];
}