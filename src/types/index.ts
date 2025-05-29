type ModalContent = 'basketModalView'|'productModalView'|'orderCommunicationView'|'orderDeliveryView'|'orderSuccessView';

export type ModalEventData = {
  modalContent:ModalContent;
  productId?:string;
  summ?: number;
}

type UpdateOptions = 'add'|'delete'|'clear';

export type BasketEventData = {
  id?:string;
  total?: number;
  summ?: number;
  productElement?: HTMLElement;
  product?:IProduct;
  updateMod?: UpdateOptions;
}

type OrderView = 'orderDeliveryView'|'orderCommumicationView';

export type OrderEventData = {
  activeView: OrderView;
  inputs: Record<string, string>;
}
