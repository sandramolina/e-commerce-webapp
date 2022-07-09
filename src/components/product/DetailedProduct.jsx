import React from 'react';

import { useParams } from 'react-router-dom';

const DetailedProduct = () => {
  const { id } = useParams();
  return <div>Product ID: {id}</div>;
};
export default DetailedProduct;
