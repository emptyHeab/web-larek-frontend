import { IOrderFormView } from "./orderFormView";

export interface IOrderDeliveryView extends IOrderFormView {
  onlineBtn: HTMLButtonElement;
  receiveBtn: HTMLButtonElement;
  addressInput: HTMLInputElement;
  nextStepBtn: HTMLButtonElement;
  nextStep(): void;
}