import { IEvents } from "../../components/base/events";

export interface IView {
  eventEmmiter: IEvents
  target: HTMLElement;
  render(): HTMLElement;
  updateView(): void;
  addListeners(): void;
}