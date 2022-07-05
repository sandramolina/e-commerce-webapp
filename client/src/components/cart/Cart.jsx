import React from 'react';

import { useSelector } from 'react-redux';

import CartItem from './CartItem';

function Cart() {
  const products = useSelector((state) => state.products);
  const productNodes = products.map((product) => (
    <CartItem product={product} key={product.id} />
  ));
  return (
    <ul>
      <div>{productNodes} </div>
    </ul>
  );
}

export default Cart;
