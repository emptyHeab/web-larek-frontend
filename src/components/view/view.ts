import { IView } from "../../types/view/view";
import { IEvents } from "../base/events";

export abstract class View implements IView {
  target: HTMLElement;
  eventEmmiter: IEvents

  constructor(target:HTMLElement, eventEmmiter:IEvents) {
    this.eventEmmiter = eventEmmiter;
  }

  abstract render(): HTMLElement;

  abstract addListeners(): void;

  abstract updateView(): void;
}