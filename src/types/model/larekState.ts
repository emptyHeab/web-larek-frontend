import { IProductView } from "../view/productView";
import { IModal } from "../view/modal";
import { IEvents } from "../../components/base/events";
import { IBasketView } from '../view/basketView';
import { IProductsListPageView } from "../view/productsListPageView";
import { IApi } from "./api";
import { IProductBasket } from "./productBasket";
import { IOrder } from "./order";
import { IProductModalView } from "../view/productModalView";
import { IOrderCommunicationView } from "../view/orderCommunicationView";
import { IOrderDeliveryView } from "../view/orderDeliveryView";
import { IOrderSuccessView } from "../view/orderSuccsessView";
import { IBasketModalView } from "../view/basketModalView";

export interface ILarekState {
  api: IApi;
  modal: IModal;
  basket: IProductBasket;
  basketView: IBasketView;
  basketModalView:IBasketModalView;
  products: IProductsList;
  productViews: IProductView[];
  order: IOrder;
  eventEmmiter: IEvents;
	productsListPageView: IProductsListPageView;
  prodcutModalViews: IProductModalView[];
  orderCommunicationView: IOrderCommunicationView;
  orderDeliveryView: IOrderDeliveryView;
  orderSuccessView: IOrderSuccessView;
}