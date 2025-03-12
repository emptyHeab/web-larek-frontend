import './scss/styles.scss';
import './components/base/api';
import './types/index';
import { IEvents } from './components/base/events';
import { IView } from './types/view/view';
import { LarekState } from './components/model/larekState';

const state = init();

function subscribe(view:IView, eventEmmiter:IEvents) {

}

function openModalHandler(content:HTMLElement) {

}

function makeOrderHandler(basket:IProductBasket): void {

}

function addToBasketHandler(product:IProduct): void {
  
}

function deleteFromBasketHandler(product:IProduct): void {
  
}

function inputChangedHandler(input:HTMLInputElement): void {
  
}

async function getProducts(api:IApi): Promise<ProductsList> {
  return null;
}

async function postOrder(api:IApi, order:IOrder): Promise<OrderData> {
  return null;
}

function init(): LarekState {
  return null;
}