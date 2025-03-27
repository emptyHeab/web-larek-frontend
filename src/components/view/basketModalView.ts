import { IBasketModalView } from "../../types/view/basketModalView";
import { IEvents } from "../base/events";
import { View } from "./view";

export class BasketModalView extends View implements IBasketModalView {
  private _basketList: HTMLUListElement;
  private _total: HTMLElement;
  private _makeOrderBtn: HTMLButtonElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  render():HTMLElement {
   return null; 
  }

  makeOrder(): void {
		
  }

  addListeners(): void {
    
  }

  updateView(): void {
    
  }

	public get basketList(): HTMLUListElement {
		return this._basketList;
	}

	public set basketList(value: HTMLUListElement) {
		this._basketList = value;
	}

	public get total(): HTMLElement {
		return this._total;
	}

	public set total(value: HTMLElement) {
		this._total = value;
	}

	public get makeOrderBtn(): HTMLButtonElement {
		return this._makeOrderBtn;
	}

	public set makeOrderBtn(value: HTMLButtonElement) {
		this._makeOrderBtn = value;
	}

}