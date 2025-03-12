import { IModal } from "../../types/view/modal";
import { IEvents } from "../base/events";
import { View } from "./view";

export class Modal extends View implements IModal {
  active: boolean;
  closeBtn: HTMLButtonElement;
  content: HTMLElement;

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
}