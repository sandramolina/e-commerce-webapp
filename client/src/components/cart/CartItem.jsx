import React from 'react';

import { useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CartItem.css';

import { removeItemFromCart } from './CartItemSlice';

const CartItem = ({ productInCart }) => {
  const dispatch = useDispatch();
  const remove = (e) => dispatch(removeItemFromCart(Number(e.target.value)));
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img
            alt={`beautiful representation for the product ${productInCart.product.title}`}
            className='.img-fluid. max-width: 50%'
            src={productInCart.product.image}
          />
          <Card.Title>{productInCart.product.title}</Card.Title>
          <Card.Subtitle>
            {productInCart.product.colours[0].colourName}
          </Card.Subtitle>
          <Container fluid>
            <Row>
              <Col>
                {productInCart.product.price.currencyUnit.symbol}{' '}
                {productInCart.product.price.amount}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant='primary' size='sm'>
                  -
                </Button>
                <span>{productInCart.count}</span>
                <Button variant='primary' size='sm'>
                  +
                </Button>
              </Col>
              <Col>
                <button onClick={remove} type='button' value={productInCart.id}>
                  Remove
                </button>
              </Col>
              <Col>£PXQ</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItem;
