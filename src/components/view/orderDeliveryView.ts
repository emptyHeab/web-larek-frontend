import { IOrderDeliveryView } from "../../types/view/orderDeliveryView";
import { IEvents } from "../base/events";
import { OrderFormView } from "./orderFormView";

class OrderDeliveryView extends OrderFormView implements IOrderDeliveryView {
  private _onlineBtn: HTMLButtonElement;
  private _receiveBtn: HTMLButtonElement;
  private _addressInput: HTMLInputElement;
	private _nextStepBtn: HTMLButtonElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }
  
  nextStep(): void {
    
  }

  render(): HTMLElement {
    return null;
  }

  updateView(): void {
    
  }

	public get onlineBtn(): HTMLButtonElement {
		return this._onlineBtn;
	}

	public set onlineBtn(value: HTMLButtonElement) {
		this._onlineBtn = value;
	}

	public get receiveBtn(): HTMLButtonElement {
		return this._receiveBtn;
	}

	public set receiveBtn(value: HTMLButtonElement) {
		this._receiveBtn = value;
	}

	public get addressInput(): HTMLInputElement {
		return this._addressInput;
	}

	public set addressInput(value: HTMLInputElement) {
		this._addressInput = value;
	}

	public get nextStepBtn(): HTMLButtonElement {
		return this._nextStepBtn;
	}

	public set nextStepBtn(value: HTMLButtonElement) {
		this._nextStepBtn = value;
	}


}