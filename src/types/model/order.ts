import { ModelWithEvents } from "../../components/model/modelWithEvents";

export interface IOrder extends ModelWithEvents, OrderData{
  validate(inputs:Record<string, string>): number;
}

export interface OrderData {
  payment: string;
  email: string;
  phone: string;
  address: string;
}

export type OrderFields = keyof OrderData;