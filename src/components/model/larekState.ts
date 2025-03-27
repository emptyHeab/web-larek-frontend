import { ILarekState } from "../../types/model/larekState";
import { IModal } from "../../types/view/modal";
import { IBasketModalView } from "../../types/view/basketModalView";
import { IProductView } from "../../types/view/productView";
import { IEvents } from "../base/events";
import { IProductsListView } from "../../types/view/productsListView";
import { IProductBasketView } from "../../types/view/productBasketView";
import { IProductModalView } from "../../types/view/productModalView";
import { IOrderDeliveryView } from "../../types/view/orderDeliveryView";
import { IBasketView } from "../../types/view/basketView";
import { IOrderCommunicationView } from "../../types/view/orderCommunicationView";
import { IOrderSuccessView } from "../../types/view/orderSuccsessView";

export class LarekState implements ILarekState {
  private _api: IApi|null;
  private _modal: IModal|null;
  private _basket: IProductBasket|null;
  private _basketModalView: IBasketModalView|null;
  private _basketView: IBasketView|null;
  private _products: IProductsList|null;
  private _productViews: IProductView[]|null;
  private _productModalViews: IProductModalView[]|null;
  private _productBasketViews: IProductBasketView[]|null;
  private _order: IOrder|null;
  private _orderDeliveryView: IOrderDeliveryView|null;
  private _orderCommunicationView: IOrderCommunicationView|null;
  private _orderSuccessView: IOrderSuccessView|null;
  private _eventEmmiter: IEvents|null;
  private _productsListView: IProductsListView|null;
  
  constructor(param: Partial<LarekState>) {
    
  }

	public get api(): IApi {
		return this._api;
	}

	public set api(value: IApi) {
		this._api = value;
	}

	public get modal(): IModal {
		return this._modal;
	}

	public set modal(value: IModal) {
		this._modal = value;
	}

	public get basket(): IProductBasket {
		return this._basket;
	}

	public set basket(value: IProductBasket) {
		this._basket = value;
	}

	public get basketModalView(): IBasketModalView {
		return this._basketModalView;
	}

	public set basketModalView(value: IBasketModalView) {
		this._basketModalView = value;
	}

	public get basketView(): IBasketView {
		return this._basketView;
	}

	public set basketView(value: IBasketView) {
		this._basketView = value;
	}

	public get products(): IProductsList {
		return this._products;
	}

	public set products(value: IProductsList) {
		this._products = value;
	}

	public get productViews(): IProductView[] {
		return this._productViews;
	}

	public set productViews(value: IProductView[]) {
		this._productViews = value;
	}

	public get productModalViews(): IProductModalView[] {
		return this._productModalViews;
	}

	public set productModalViews(value: IProductModalView[]) {
		this._productModalViews = value;
	}

	public get productBasketViews(): IProductBasketView[] {
		return this._productBasketViews;
	}

	public set productBasketViews(value: IProductBasketView[]) {
		this._productBasketViews = value;
	}

	public get order(): IOrder {
		return this._order;
	}

	public set order(value: IOrder) {
		this._order = value;
	}

	public get orderDeliveryView(): IOrderDeliveryView {
		return this._orderDeliveryView;
	}

	public set orderDeliveryView(value: IOrderDeliveryView) {
		this._orderDeliveryView = value;
	}

	public get orderCommunicationView(): IOrderCommunicationView {
		return this._orderCommunicationView;
	}

	public set orderCommunicationView(value: IOrderCommunicationView) {
		this._orderCommunicationView = value;
	}

	public get orderSuccessView(): IOrderSuccessView {
		return this._orderSuccessView;
	}

	public set orderSuccessView(value: IOrderSuccessView) {
		this._orderSuccessView = value;
	}

	public get eventEmmiter(): IEvents {
		return this._eventEmmiter;
	}

	public set eventEmmiter(value: IEvents) {
		this._eventEmmiter = value;
	}

	public get productsListView(): IProductsListView {
		return this._productsListView;
	}

	public set productsListView(value: IProductsListView) {
		this._productsListView = value;
	}
  
}