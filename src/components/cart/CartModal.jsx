import React from 'react';

import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Cart from './Cart';
import { closeCart } from './CartModalSlice';

function CartModal() {
  const { t } = useTranslation();
  const show = useSelector((state) => state.cartIsOpen.value);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeCart());
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('your_bag')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartModal;
