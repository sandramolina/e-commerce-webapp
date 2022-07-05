import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

export const CartModaSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    closeCart: (state) => {
      const changeToOpen = state;
      changeToOpen.value = false;
    },
    openCart: (state) => {
      const changeToOpen = state;
      changeToOpen.value = true;
    },
  },
});

export const { closeCart, openCart } = CartModaSlice.actions;
export default CartModaSlice.reducer;
