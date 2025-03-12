import { ILarekState } from "../../types/model/larekState";
import { IModal } from "../../types/view/modal";
import { IBasketView } from "../../types/view/basketView";
import { IProductView } from "../../types/view/productView";
import { IOrderView } from "../../types/view/orderView";
import { IEvents } from "../base/events";
import { IProductsListView } from "../../types/view/productsListView";
import { IProductBasketView } from "../../types/view/productBasketView";
import { IProductModalView } from "../../types/view/productModalView";

export class LarekState implements ILarekState {
  api: IApi|null;
  modal: IModal|null;
  basket: IProductBasket|null;
  basketView: IBasketView|null;
  products: IProductsList|null;
  productViews: IProductView[]|null;
  productModalViews: IProductModalView[]|null;
  productBasketViews: IProductBasketView[]|null;
  order: IOrder|null;
  orderView: IOrderView|null;
  eventEmmiter: IEvents;
  productListView: IProductsListView|null;

  constructor(param: Partial<LarekState>) {

  }
}