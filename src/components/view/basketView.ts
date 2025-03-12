import { IBasketView } from "../../types/view/basketView";
import { IEvents } from "../base/events";
import { View } from "./view";

export class BasketView extends View implements IBasketView {
  basketList: HTMLUListElement;
  total: HTMLElement;
  makeOrderBtn: HTMLButtonElement;
  basketIcon: HTMLElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  render():HTMLElement {
   return null; 
  }

  makeOrder(): void {
    
  }

  openModal(): void {
    
  }

  addListeners(): void {
    
  }

  updateView(): void {
    
  }
}