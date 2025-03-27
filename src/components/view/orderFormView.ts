import { IOrderFormView } from "../../types/view/orderFormView";
import { View } from "./view";

export abstract class OrderFormView extends View implements IOrderFormView{
  showErrorMessage(input:HTMLInputElement): void {

  }

  hideErrorMessage(input:HTMLInputElement): void {

  }
  
  inputChanged(input:HTMLInputElement): void  {

  }
}