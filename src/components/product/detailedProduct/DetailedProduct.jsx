import React from 'react';

import { Carousel, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductId } from '../ProductSlice';

import Checkout from './Checkout';
import './DetailedProduct.css';
import Details from './Details';

const DetailedProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    selectByProductId(state.productsState, Number(id))
  );

  const colourNodes = product.colours.map((colour) => (
    <img
      className='colour-img'
      src={colour.colourImage}
      alt={colour.colourName}
    />
  ));
  const colourNodesDropdown = product.colours.map((colour) => (
    <Dropdown.Item className='colour-dd'>
      <img
        className='colour-img'
        src={colour.colourImage}
        alt={colour.colourName}
      />
      <p>{colour.colourName}</p>
    </Dropdown.Item>
  ));
  return (
    <div className='detailed-product'>
      <header>
        <h1 className='product-title'>{product.title}</h1>
        <p className='rating-section'>
          Rating: {product.rating.averageRate}{' '}
          <span className='rate-count'>({product.rating.count})</span>
        </p>
      </header>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={product.image} alt='Product' />
        </Carousel.Item>
      </Carousel>
      <section className='colours'>{colourNodes}</section>
      <Dropdown size='sm'>
        <Dropdown.Toggle className='colour-dd-tt'>Select Color</Dropdown.Toggle>
        <Dropdown.Menu>{colourNodesDropdown}</Dropdown.Menu>
      </Dropdown>
      <Details product={product} />
      <Checkout product={product} />
    </div>
  );
};
export default DetailedProduct;
