import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import { getProducts } from '../functions/product';

import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      getProducts().then((res) => {
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

  const filterByCategory = (cat) => {
    const updateList = data.filter((x) => x.category._id === cat);
    console.log(data);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => filterByCategory('625a270c9ed97f60a8ce653a')}
          >
            MESAS
          </button>
        </div>
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
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.name}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <NavLink
                      to={`/product/${product.slug}`}
                      className="btn btn-outline-dark"
                    >
                      Lo quiero!
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

export default Products;
