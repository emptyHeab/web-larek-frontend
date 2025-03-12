import { IProductBasketView } from "../../types/view/productBasketView";
import { IEvents } from "../base/events";
import { View } from "./view";

class ProductBasketView extends View implements IProductBasketView {
  id: string;
  productNumber: HTMLElement;
  title: HTMLElement;
  price: HTMLElement;
  deletBtn: HTMLButtonElement;

  constructor(productId:string, eventEmmiter:IEvents) {
    super(null, eventEmmiter);
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
}