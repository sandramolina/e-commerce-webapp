import { configureStore } from '@reduxjs/toolkit';

import products from '../components/product/ProductSlice';
import cartIsOpen from '../components/cart/CartModalSlice';
import cart from '../components/cart/CartItemSlice';

const store = configureStore({
  reducer: {
    products,
    cartIsOpen,
    cart,
  },
});

export default store;
