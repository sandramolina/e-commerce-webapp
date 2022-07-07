import { configureStore } from '@reduxjs/toolkit';

import productsState from '../components/product/ProductSlice';
import cartIsOpen from '../components/cart/CartModalSlice';
import cart from '../components/cart/CartItemSlice';

const store = configureStore({
  reducer: {
    productsState,
    cartIsOpen,
    cart,
  },
});

export default store;
