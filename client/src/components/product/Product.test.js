import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import store from '../../app/store';

import products from '../../mock';

import Product from './Product';

//This first test checks that the image is being rendered int he page
describe('Product renders image information', () => {
  let product;
  const productObject = products[0];

  beforeEach(() => {
    product = render(
      <Provider store={store}>
        <Product product={productObject} />
      </Provider>
    );
  });

  it('should render product information on the page', () => {
    const image = product.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/lipBalm.png'
    );
    expect(image).toHaveAttribute(
      'alt',
      'beautiful representation for the product Super Lip Gloss'
    );
  });
});
