import { View } from "../../components/view/view";

export interface IOrderSuccessView extends View {
  description: HTMLElement;
  closeBtn: HTMLButtonElement;
  closeModal(): void;
}