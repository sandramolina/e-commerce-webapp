import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { clearCart } from './CartItemSlice';
import CartItem from './CartItem';
import CheckOutForm from './CheckOutForm';

function Cart() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
    setIsCheckoutOpen(true);
  };

  const productsInCart = useSelector((state) => state.cart.items);
  const productsInCartNodes = productsInCart.map((productInCart) => (
    <CartItem productInCart={productInCart} key={productInCart.id} />
  ));

  const totalCart = productsInCart.reduce(
    (runninTotal, currentCartItem) =>
      runninTotal +
      currentCartItem.product.price.amount * currentCartItem.count,
    0
  );

  const { t } = useTranslation();
  return (
    <div>
      {isCheckoutOpen ? (
        <CheckOutForm />
      ) : (
        <div>
          <h4>
            {productsInCart.length} {t('items')}
          </h4>
          <div>{productsInCartNodes} </div>
          <hr />
          <h3>
            {t('total_purchase')} £{totalCart}
          </h3>
          {productsInCart.length !== 0 ? (
            <Button onClick={handleClick}>Checkout</Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Cart;
