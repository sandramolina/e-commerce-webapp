/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartIsOpen: false };

export const CartModaSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    closeCart: (state) => {
      state.cartIsOpen = false;
    },
    openCart: (state) => {
      state.cartIsOpen = true;
    },
  },
});

export const { closeCart, openCart } = CartModaSlice.actions;
export default CartModaSlice.reducer;
