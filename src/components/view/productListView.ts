import { View } from "./view";
import { IProductsListView } from "../../types/view/productsListView";
import { IEvents } from "../base/events";

class ProductsListView extends View implements IProductsListView {
  private _productsPlace: HTMLElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  openModal(productId:string): void {
    
  }

  render(): HTMLElement {
    return null;
  }

  updateView(): void {
    
  }

  addListeners(): void {
    
  }

	public get productsPlace(): HTMLElement {
		return this._productsPlace;
	}

	public set productsPlace(value: HTMLElement) {
		this._productsPlace = value;
	}

}