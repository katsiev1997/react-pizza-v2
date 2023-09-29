import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { CartItem, CartSliceState } from "../cart/types";

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
      );
      if (findItem && findItem.count > 1) findItem.count--;
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem(state, action: PayloadAction<CartItem>) {
      if (window.confirm("Вы действительно удалить этот товар из корзины?")) {
        const index = state.items.findIndex(
          (obj) =>
            obj.id === action.payload.id &&
            obj.size === action.payload.size &&
            obj.type === action.payload.type
        );
        state.items.splice(index, 1);

        state.totalPrice = calcTotalPrice(state.items);
      }
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
