import { IOrderSuccessView } from "../../types/view/orderSuccsessView";
import { IEvents } from "../base/events";
import { View } from "./view";

class OrderSuccessView extends View implements IOrderSuccessView {
  private _description: HTMLElement;
  private _closeBtn: HTMLButtonElement;

  constructor(eventEmmiter:IEvents) {
    super(null, eventEmmiter);
  }

  closeModal(): void {
    
  }

  render(): HTMLElement {
    return null;
  }

  updateView(): void {
    
  }

	public get description(): HTMLElement {
		return this._description;
	}

	public set description(value: HTMLElement) {
		this._description = value;
	}

	public get closeBtn(): HTMLButtonElement {
		return this._closeBtn;
	}

	public set closeBtn(value: HTMLButtonElement) {
		this._closeBtn = value;
	}

}