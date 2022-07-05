import React from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './CartItem.css';

const CartItem = ({ product }) => (
  <div>
    <Card>
      <Card.Body>
        <Card.Img
          alt={`beautiful representation for the product ${product.title}`}
          className='.img-fluid. max-width: 50%'
          src={product.image}
        />
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle>{product.colours[0].colourName}</Card.Subtitle>
        <Container fluid>
          <Row>
            <Col>
              {product.price.currencyUnit.symbol} {product.price.amount}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant='primary' size='sm'>
                -
              </Button>
              <span>1</span>
              <Button variant='primary' size='sm'>
                +
              </Button>
            </Col>
            <Col>
              <a href='/'>Remove</a>
            </Col>
            <Col>£PXQ</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  </div>
);

export default CartItem;
