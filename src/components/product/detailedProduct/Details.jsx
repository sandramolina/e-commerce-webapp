import React from 'react';

import { Accordion, Card } from 'react-bootstrap';

const Details = ({ product }) => {
  const ingredientNodes = product.ingredients.map((ingredient) => (
    <li>{ingredient.ingredient}</li>
  ));
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Details</Accordion.Header>
        <Accordion.Body>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title>{product.shortDescription}</Card.Title>
              <Card.Text>{product.longDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Body>
              <ul>{ingredientNodes}</ul>
              <Card.Footer>
                All SO Fecth! products are 100% vegan and cruelty free
              </Card.Footer>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Details;
