export class Order implements IOrder {
  private _payment: string;
  private _email: string;
  private _phone: string;
  private _address: string;

  constructor({payment, email, phone, address, items}:OrderParam) {

  }

  public get payment(): string {
		return this._payment;
	}

	public set payment(value: string) {
		this._payment = value;
	}

  public get email(): string {
		return this._email;
	}

	public set email(value: string) {
		this._email = value;
	}

	public get phone(): string {
		return this._phone;
	}

	public set phone(value: string) {
		this._phone = value;
	}

  
	public get address(): string {
		return this._address;
	}

	public set address(value: string) {
		this._address = value;
	}

  validate(): string|null {
    return null;
  }

  setValidate(): void {
    
  }
}