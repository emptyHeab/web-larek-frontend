import {IProductView} from '../../types/view/productView';
import { IEvents } from '../base/events';
import { View } from './view';

export class ProductView extends View implements IProductView {
  id: string;
  image: HTMLImageElement;
  title: HTMLElement;
  category: HTMLElement;
  price: HTMLElement;
  
  constructor(productId:string, eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  render(): HTMLElement {
    return null;
  }

  addListeners(): void {
    
  }

  updateView(): void {
    
  }
}