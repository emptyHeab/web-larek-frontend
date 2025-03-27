import { IOrderCommunicationView } from "../../types/view/orderCommunicationView";
import { IEvents } from "../base/events";
import { OrderFormView } from "./orderFormView";

class OrderCommunicationView extends OrderFormView implements IOrderCommunicationView{
  private _emailInput: HTMLInputElement;
  private _phoneInput: HTMLInputElement;
  private _payBtn: HTMLButtonElement;
  
  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  postOrder(): void {
    
  }

  render(): HTMLElement {
    return null;
  }

  updateView(): void {
    
  }

	public get emailInput(): HTMLInputElement {
		return this._emailInput;
	}

	public set emailInput(value: HTMLInputElement) {
		this._emailInput = value;
	}

	public get phoneInput(): HTMLInputElement {
		return this._phoneInput;
	}

	public set phoneInput(value: HTMLInputElement) {
		this._phoneInput = value;
	}

	public get payBtn(): HTMLButtonElement {
		return this._payBtn;
	}

	public set payBtn(value: HTMLButtonElement) {
		this._payBtn = value;
	}

}