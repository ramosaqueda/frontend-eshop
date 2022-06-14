import React, { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import { getProductsPopulars } from '../functions/product';

import { getCategories } from '../functions/category';
import Product from './Product';

import { NavLink } from 'react-router-dom';

const ProductsDest = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      getProductsPopulars().then((res) => {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      });
    };

    loadProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={`/assets/images/${product.pimage}`}
                    className="card-img-top"
                    alt="..."
                    height="250px"
                  />

                  <div className="product-rating">
                    <i className="fa fa-star-o yelow"></i>

                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.name}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <p className="card-text">{product.description}</p>

                    <NavLink
                      to={`/product/${product.slug}`}
                      className="btn btn-outline-dark"
                    >
                      Ver Producto
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Productos Destacados
            </h1>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDest;
