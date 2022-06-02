import { RadioButtonCheckedOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../redux/actions';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(deleteCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="../assets/images/emptycart.png"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Su carrito esta vacio</h5>

              <p className="card-text">
                <small className="text-muted">Visite nuestros productos</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (carItem) => {
    return (
      <div className="px-4 m-5 bg-light rounded-3">
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Eliminar"
            onClick={() => handleClose(carItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={`../assets/images/${carItem.pimage}`}
                alt={carItem.name}
                width="200px"
                height="200px"
              />
            </div>
            <div className="col-md-4">
              <h3> {carItem.name} </h3>
              <p></p>
              <p className="lead fw-bold">${carItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ButtonCheckedOut = () => {
    return (
      <div className="container">
        <div class="row align-items-end">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 me-1"
          >
            Proceder con el pago
          </NavLink>

          <NavLink
            to="/products"
            className="btn btn-outline-primary mb-5 w-25 ms-2"
          >
            Seguir Comprando
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length == 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && ButtonCheckedOut()}
    </>
  );
};

export default Cart;
