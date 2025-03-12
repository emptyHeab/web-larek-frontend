import { IView } from "./view";

export type OrderStep = 1|2|3|-1;

export interface IOrderView extends IView{
  orderStep: OrderStep;
  paymentInput: HTMLInputElement;
  emailInput: HTMLInputElement;
  phoneInput: HTMLInputElement;
  addressInput: HTMLInputElement;
  nextStepBtn:HTMLButtonElement;
  orderForm: HTMLFormElement;
  successBtn: HTMLButtonElement;
  showErrorMessage(input:HTMLInputElement): void;
  hideErrorMessage(input:HTMLInputElement): void;
  nextStep(): void;
  postOrder(order:IOrder): void;
  inputChanged(input:HTMLInputElement): void;
  closeOrder(): void;
}