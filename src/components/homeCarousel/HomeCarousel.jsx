import React from 'react';

import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30008_FB5001_model_alt5.jpg?v=1656701883'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={2500}>
        <img
          className='d-block w-100'
          src='https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30008_FB5001_model_alt5.jpg?v=1656701883'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className='d-block w-100'
          src='https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30008_FB5001_model_alt5.jpg?v=1656701883'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default HomeCarousel;
