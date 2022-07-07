import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

export const CartModaSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    closeCart: (state) => {
      state.value = false;
    },
    openCart: (state) => {
      state.value = true;
    },
  },
});

export const { closeCart, openCart } = CartModaSlice.actions;
export default CartModaSlice.reducer;
