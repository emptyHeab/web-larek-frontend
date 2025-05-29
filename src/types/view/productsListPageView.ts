import { IView } from "./view";

export interface IProductsListPageView extends IView{
  render(products: IProduct[]): HTMLElement;
}