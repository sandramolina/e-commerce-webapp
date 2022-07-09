import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductId } from './ProductSlice';

const DetailedProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    selectByProductId(state.productsState, Number(id))
  );
  return (
    <div>
      Product ID: {id}, {product.title}
    </div>
  );
};
export default DetailedProduct;
