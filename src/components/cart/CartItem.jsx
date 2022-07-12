import React from 'react';

import { useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CartItem.css';

import { removeItemFromCart } from './CartItemSlice';

const CartItem = ({ productInCart }) => {
  const dispatch = useDispatch();
  const remove = (e) => dispatch(removeItemFromCart(Number(e.target.value)));
  const countTimesPrice =
    productInCart.count * productInCart.product.price.amount;
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
                Unit Price:
                {productInCart.product.price.currencyUnit.symbol}{' '}
                {productInCart.product.price.amount}
              </Col>
            </Row>
            <hr />
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
                <Button
                  onClick={remove}
                  type='button'
                  value={productInCart.id}
                  className='remove-button'
                >
                  Remove
                </Button>
              </Col>
              <Col className='subtotal-text'>
                Subtotal:
                {productInCart.product.price.currencyUnit.symbol}
                {countTimesPrice}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItem;
