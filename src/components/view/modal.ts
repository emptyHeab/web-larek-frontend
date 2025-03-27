import { IModal } from "../../types/view/modal";
import { IEvents } from "../base/events";
import { View } from "./view";

export class Modal extends View implements IModal {
  private _active: boolean;
  private _closeBtn: HTMLButtonElement;
  private _content: HTMLElement;

  constructor(eventEmmiter:IEvents) {
    super(null,eventEmmiter);
  }

  openModal(content:HTMLElement): void {
    
  }

  closeModal(): void {
    
  }

  render():HTMLElement {
    return null
  }

  addListeners(): void {
    
  }
  
  updateView(): void {
    
  }

	public get active(): boolean {
		return this._active;
	}

	public set active(value: boolean) {
		this._active = value;
	}

	public get closeBtn(): HTMLButtonElement {
		return this._closeBtn;
	}

	public set closeBtn(value: HTMLButtonElement) {
		this._closeBtn = value;
	}

	public get content(): HTMLElement {
		return this._content;
	}

	public set content(value: HTMLElement) {
		this._content = value;
	}

}