import { IView } from "./view";

export interface IModal extends IView {
  openModal(content:HTMLElement): void;
  closeModal(): void;
}