import { IProductView } from "../view/productView";
import { IModal } from "../view/modal";
import { IBasketView } from "../view/basketView";
import { IOrderView } from "../view/orderView";
import { IEvents } from "../../components/base/events";
import { IProductsListView } from "../view/productsListView";
import { IProductModalView } from "../view/productModalView";
import { IProductBasketView } from "../view/productBasketView";

export interface ILarekState {
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
  eventEmmiter: IEvents|null;
  productListView: IProductsListView|null;
}