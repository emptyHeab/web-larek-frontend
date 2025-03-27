import './scss/styles.scss';
import './components/base/api';
import './types/index';
import { IEvents } from './components/base/events';
import { IView } from './types/view/view';
import { LarekState } from './components/model/larekState';

const state = init();

function subscribe(view:IView, eventEmmiter:IEvents) {

}

function openModalHandler(modalContent:string) {

}

function setModalContent(modalContent:string) {

}

function closeModalHandler() {

}

function addToBasketHandler(productId:string): void {
  
}

function deleteFromBasketHandler(productId:string): void {
  
}

function inputChangedHandler(input:HTMLInputElement): void {
  
}

function payForOrderHandler(): void {
  
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