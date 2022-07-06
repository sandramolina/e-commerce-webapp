import React from 'react';

import { useSelector } from 'react-redux';

import CartItem from './CartItem';

function Cart() {
  const productsInCart = useSelector((state) => state.cart.items);
  const productsInCartNodes = productsInCart.map((productInCart) => (
    <CartItem productInCart={productInCart} key={productInCart.id} />
  ));
  return (
    <ul>
      <h4>{productsInCart.length} items in the bag:</h4>
      <div>{productsInCartNodes} </div>
    </ul>
  );
}

export default Cart;
