import { View } from "./view";
import { IProductModalView } from "../../types/view/productModalView";
import { IEvents } from "../base/events";

class ProductModalView extends View implements IProductModalView {
  id: string;
  description: HTMLElement;
  image: HTMLImageElement;
  title: HTMLElement;
  category: HTMLElement;
  price: HTMLElement;
  toBasketBtn: HTMLButtonElement;

  constructor(productId:string, eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  addToBasket(): void {

  }

  render(): HTMLElement {
    return null
  }

  addListeners(): void {
    
  }
  
  updateView(): void {
    
  }
}