import React from 'react';

import { useDispatch } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CartItem.css';

const CartItem = ({ productInCart }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => dispatch(removeFromCart());
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
                <Button onClick={removeFromCart}>Remove</Button>
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
