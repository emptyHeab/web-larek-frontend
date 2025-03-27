import {IProductView} from '../../types/view/productView';
import { IEvents } from '../base/events';
import { View } from './view';

export class ProductView extends View implements IProductView {
  private _id: string;
  private _image: HTMLImageElement;
  private _title: HTMLElement;
  private _category: HTMLElement;
  private _price: HTMLElement;
  
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

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get image(): HTMLImageElement {
		return this._image;
	}

	public set image(value: HTMLImageElement) {
		this._image = value;
	}

	public get title(): HTMLElement {
		return this._title;
	}

	public set title(value: HTMLElement) {
		this._title = value;
	}

	public get category(): HTMLElement {
		return this._category;
	}

	public set category(value: HTMLElement) {
		this._category = value;
	}

	public get price(): HTMLElement {
		return this._price;
	}

	public set price(value: HTMLElement) {
		this._price = value;
	}

}