import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartIsOpen: false };

export const CartModaSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    closeCart: (state) => {
      const changeToOpen = state;
      changeToOpen.cartIsOpen = false;
    },
    openCart: (state) => {
      const changeToOpen = state;
      changeToOpen.cartIsOpen = true;
    },
  },
});

export const { closeCart, openCart } = CartModaSlice.actions;
export default CartModaSlice.reducer;
