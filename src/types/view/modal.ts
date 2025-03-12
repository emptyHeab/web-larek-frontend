import { IView } from "./view";

export interface IModal extends IView {
  active:boolean;
  closeBtn: HTMLButtonElement;
  content: HTMLElement;
  openModal(content:HTMLElement): void;
  closeModal(): void;
}