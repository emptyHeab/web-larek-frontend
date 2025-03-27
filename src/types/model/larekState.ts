import { IProductView } from "../view/productView";
import { IModal } from "../view/modal";
import { IBasketModalView } from "../view/basketModalView";
import { IEvents } from "../../components/base/events";
import { IProductsListView } from "../view/productsListView";
import { IProductModalView } from "../view/productModalView";
import { IProductBasketView } from "../view/productBasketView";
import { IBasketView } from '../view/basketView';
import { IOrderDeliveryView } from "../view/orderDeliveryView";
import { IOrderCommunicationView } from "../view/orderCommunicationView";
import { IOrderSuccessView } from "../view/orderSuccsessView";

export interface ILarekState {
  api: IApi|null;
  modal: IModal|null;
  basket: IProductBasket|null;
  basketModalView: IBasketModalView|null;
  basketView: IBasketView|null;
  products: IProductsList|null;
  productViews: IProductView[]|null;
  productModalViews: IProductModalView[]|null;
  productBasketViews: IProductBasketView[]|null;
  order: IOrder|null;
  orderDeliveryView: IOrderDeliveryView|null;
  orderCommunicationView: IOrderCommunicationView|null;
  orderSuccessView: IOrderSuccessView|null;
  eventEmmiter: IEvents|null;
  productsListView: IProductsListView|null;
}