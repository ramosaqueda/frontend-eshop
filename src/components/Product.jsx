import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../functions/product';

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const obtieneProducto = () => {
      setLoading(true);

      getProduct(slug).then((res) => {
        setProduct(res.data);
        setLoading(false);        
      });
      
    };
    obtieneProducto();
  });

  const Loading = () => {
    return <>...Loading</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.pimage}
            alt={product.title}
            height="150px"
            width="150px"
          />
        </div>
      </>
    );
  };
  return (
    <div>
      {' '}
      <div className="container">
        {' '}
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
