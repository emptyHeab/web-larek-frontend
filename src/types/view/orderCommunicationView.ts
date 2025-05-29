import { IOrderFormView } from "./orderFormView";

export interface IOrderCommunicationView extends IOrderFormView {
  updateView(result:number): void;
}