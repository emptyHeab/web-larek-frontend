import { IOrderFormView } from "./orderFormView";

export interface IOrderCommunicationView extends IOrderFormView{
  emailInput: HTMLInputElement;
  phoneInput: HTMLInputElement;
  payBtn: HTMLButtonElement;
  postOrder(): void;
}