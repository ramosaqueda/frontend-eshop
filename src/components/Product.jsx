import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../redux/actions';
import { NavLink } from 'react-router-dom';
import { getProduct } from '../functions/product';
import Skeleton from 'react-loading-skeleton';
const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

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
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={`../assets/images/${product.pimage}`}
            alt={product.title}
            height="450px"
            width="450px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-5">{product.name}</h4>
          <h1 className="display-5">{product.name}</h1>
          <p className="lead">Rating {product.rating}</p>
          <i className="fa fa-star"></i>
          <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            <i className="fa-solid fa fa-cart-plus px-4 my-2"></i>
            Agregar
          </button>

          <NavLink
            to="/cart"
            className="btn btn-outline-success  ms-2 px-4 my-2"
          >
            <i className="fa-duotone fa fa-cart-plus px-4 my-2"></i>
            Ir al carrito
          </NavLink>

          <NavLink
            to="/productos"
            className="btn btn-outline-dark  ms-2 px-4 my-2"
          >
            <i className="fa-solid fa fa-rotate-left px-4 my-2"></i>
            Seguir Comprando
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      {' '}
      <div className="container py-5 " id="productModal">
        {' '}
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
