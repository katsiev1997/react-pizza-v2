import { PizzaBlockProps } from "../../components/PizzaBlock";

export type Pizza = PizzaBlockProps;

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: PizzaBlockProps[];
  status: Status;
}
