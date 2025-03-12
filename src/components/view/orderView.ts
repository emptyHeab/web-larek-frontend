import { IOrderView } from "../../types/view/orderView";
import { IEvents } from "../base/events";
import { View } from "./view";
import { OrderStep } from "../../types/view/orderView";

export class OrderView extends View implements IOrderView {
  orderStep: OrderStep;
  paymentInput: HTMLInputElement;
  emailInput: HTMLInputElement;
  phoneInput: HTMLInputElement;
  addressInput: HTMLInputElement;
  nextStepBtn:HTMLButtonElement;
  orderForm: HTMLFormElement;
  successBtn: HTMLButtonElement;
  
  constructor(eventEmiter:IEvents) {
     super(null, eventEmiter);   
  }

  render():HTMLElement {
    return null;
  }

  showErrorMessage(input:HTMLInputElement): void {
    
  }

  hideErrorMessage(input:HTMLInputElement): void {
    
  }

  nextStep(): void {
    
  }

  postOrder(order:IOrder): void {
    this.eventEmmiter.emit('postOrder', order);
  }

  inputChanged(input:HTMLInputElement): void {
    this.eventEmmiter.emit('OrderView: inputChanged', input);
  }

  closeOrder(): void {
    this.eventEmmiter.emit('closeModal');
  }

  addListeners(): void {
    
  }

  updateView(): void {
    
  }
}