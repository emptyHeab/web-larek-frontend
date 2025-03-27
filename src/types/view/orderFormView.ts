import { IView } from "./view";

export interface IOrderFormView extends IView {
  showErrorMessage(input:HTMLInputElement): void;
  hideErrorMessage(input:HTMLInputElement): void;
  inputChanged(input:HTMLInputElement): void;
}