import React from 'react';

import { Card } from 'react-bootstrap';

import './HomeCategories.css';

function HomeCategory({ category }) {
  return (
    <div>
      <Card className='category-card'>
        <Card.Img
          className='category-img'
          alt='Category avatar'
          src='https://wwd.com/wp-content/uploads/2021/12/best-makeup-kits.jpg?w=911'
        />
        <Card.Text>{category.title}</Card.Text>
      </Card>
    </div>
  );
}

export default HomeCategory;
