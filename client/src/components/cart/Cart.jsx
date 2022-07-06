import React from 'react';

import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from './CartItemSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(clearCart());

  const productsInCart = useSelector((state) => state.cart.items);
  const productsInCartNodes = productsInCart.map((productInCart) => (
    <CartItem productInCart={productInCart} key={productInCart.id} />
  ));
  return (
    <ul>
      <h4>{productsInCart.length} items in the bag:</h4>
      <div>{productsInCartNodes} </div>
      {productsInCart.length !== 0 ? (
        <Button onClick={handleClick}>Checkout</Button>
      ) : null}
    </ul>
  );
}

export default Cart;
