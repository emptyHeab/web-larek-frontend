import { IView } from "../../types/view/view";
import { IEvents } from "../base/events";

export abstract class View implements IView {
  private _target: HTMLElement;
  private _eventEmmiter: IEvents

  constructor(target:HTMLElement, eventEmmiter:IEvents) {
    this.eventEmmiter = eventEmmiter;
  }

  abstract render(): HTMLElement;
  
  abstract updateView(): void;

  public get target(): HTMLElement {
		return this._target;
	}

	public set target(value: HTMLElement) {
		this._target = value;
	}

  public get eventEmmiter(): IEvents {
		return this._eventEmmiter;
	}

  public set eventEmmiter(value: IEvents) {
		this._eventEmmiter = value;
	}


}