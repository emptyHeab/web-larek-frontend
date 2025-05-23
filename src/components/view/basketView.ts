import { IBasketView } from "../../types/view/basketView";
import { View } from "./view";
import { IEvents } from "../base/events";

export class BasketView extends View implements IBasketView {
  private _icon: HTMLElement;
  private _productsQuantity: HTMLElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  openModal(): void {
    
  }

  render(): HTMLElement {
    return null;
  }

  updateView(): void {
    
  }

  public get icon(): HTMLElement {
		return this._icon;
	}

	public set icon(value: HTMLElement) {
		this._icon = value;
	}

	public get productsQuantity(): HTMLElement {
		return this._productsQuantity;
	}

	public set productsQuantity(value: HTMLElement) {
		this._productsQuantity = value;
	}

}