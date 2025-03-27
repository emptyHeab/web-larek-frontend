import { IProductBasketView } from "../../types/view/productBasketView";
import { IEvents } from "../base/events";
import { ProductView } from "./productView";

class ProductBasketView extends ProductView implements IProductBasketView {
  private _productNumber: HTMLElement;
  private _deletBtn: HTMLButtonElement;

  constructor(productId:string, eventEmmiter:IEvents) {
    super(productId, eventEmmiter);
  }

  deleteFromBasket(): void {

  }

  render(): HTMLElement {
    return null
  }

  addListeners(): void {
    
  }
  
  updateView(): void {
    
  }

	public get productNumber(): HTMLElement {
		return this._productNumber;
	}

	public set productNumber(value: HTMLElement) {
		this._productNumber = value;
	}

	public get deletBtn(): HTMLButtonElement {
		return this._deletBtn;
	}

	public set deletBtn(value: HTMLButtonElement) {
		this._deletBtn = value;
	}

}