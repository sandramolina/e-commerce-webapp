import React from 'react';

import { Carousel } from 'react-bootstrap';

import './HomeCarousel.css';

import './hc1.png';

function HomeCarousel() {
  return (
    <Carousel id='carousel-container'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.squarespace-cdn.com/content/v1/5b31a2cb96e76f3354ab0f15/1533762909321-0VHY7XWVP3GRN60CVDTX/02-24-A1-SMLS_01a.jpg?format=2500w'
          alt='Matte lipsticks sale'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.squarespace-cdn.com/content/v1/5b31a2cb96e76f3354ab0f15/1533762937393-75IK1GB5ENRJ2JKT0U1D/09-15-A1-FSS-in-your-element.jpg?format=2500w'
          alt='Eyeshadows lipsticks sale'
        />
      </Carousel.Item>{' '}
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://images.squarespace-cdn.com/content/v1/5b31a2cb96e76f3354ab0f15/1533762939640-LT78H14KSJBUKXO25C5H/09-20-A1-%2412-Palettes.jpg?format=2500w'
          alt='Matte lipsticks sale'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
