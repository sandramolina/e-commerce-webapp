import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import products from '../../mock';

import Product from './Product';

describe('Product renders image information', () => {
  let product;
  const productObject = products[0];

  beforeEach(() => {
    product = render(<Product product={productObject} />);
  });

  it('should render product information on the page', () => {
    const image = product.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30008_FB5001_model_alt5.jpg?v=1656701883'
    );
    expect(image).toHaveAttribute(
      'alt',
      'beautiful representation for the product Super Bomb Lips'
    );
  });
});
