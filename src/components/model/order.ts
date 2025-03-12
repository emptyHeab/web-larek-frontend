export class Order implements IOrder {
  payment: string;
  email: string;
  phone: string;
  address: string;
  items: IProductsList;

  constructor({payment, email, phone, address, items}:OrderParam) {

  }

  validate(): string|null {
    return null;
  }

  get total():number{
    return 0;
  }

  setValidate(): void {
    console.log('setValidate: call');
  }
}