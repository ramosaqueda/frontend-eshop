import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import { getProductsPopulars } from '../functions/product';

//import { getCategories } from '../functions/category';
import Product from './Product';

const ProductsDest = () => {
  const [data, setData] = useState([]);
  const [mdl, SetMdl] = useState(false);
  const [slg, SetSlg] = useState();

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

  const handleClick = (sl) => {
    //return <product />;
    SetMdl(true);
    SetSlg(sl);
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

                    <button
                      className=" btn btn-outline-dark"
                      onClick={() => handleClick(product.slug)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {' '}
                      Ver Producto
                    </button>
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

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {slg}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {mdl ? (
                    <Product slug={slg} />
                  ) : (
                    '<LoginButton onClick={this.handleLoginClick} '
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDest;
