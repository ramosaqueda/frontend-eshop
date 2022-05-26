import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../functions/product';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = () => {
      getProduct(id).then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
    };
    getProduct();
  });
  return <div>Product</div>;
};

export default Product;
