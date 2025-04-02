import { IProductModalView } from "../../types/view/productModalView";
import { IEvents } from "../base/events";
import { ProductView } from "./productView";

class ProductModalView extends ProductView implements IProductModalView {
  private _description: HTMLElement;
  private _toBasketBtn: HTMLButtonElement;

  constructor(productId:string, eventEmmiter:IEvents) {
    super(productId, eventEmmiter);
  }

  addToBasket(): void {

  }

  changeButtonState(): void {
    
  }

  addListeners(): void {
    
  }

	public get description(): HTMLElement {
		return this._description;
	}

	public set description(value: HTMLElement) {
		this._description = value;
	}

	public get toBasketBtn(): HTMLButtonElement {
		return this._toBasketBtn;
	}

	public set toBasketBtn(value: HTMLButtonElement) {
		this._toBasketBtn = value;
	}

}