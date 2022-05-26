import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../functions/product';

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const obtieneProducto = async () => {
      setLoading(true);
      await getProduct(slug).then((res) => {
        setProduct(res.data);
        console.log(product);
        setLoading(false);
      });
    };
    obtieneProducto();
  }, [slug]);

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
            height="450px"
            width="450px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-5">{product.name}</h4>
          <h1 className="display-5">{product.name}</h1>
          <p className="lead">Rating</p>
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
