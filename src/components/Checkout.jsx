import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getComunas } from '../functions/Comunas';

const Checkout = () => {
  const [comunas, setComunas] = useState([]);
  useEffect(() => {
    const loadComunas = () => {
      getComunas().then((res) => {
        setComunas(res.data);
        /*setLoading(true);
        getProducts().then((res) => {
          setData(res.data);
          setFilter(res.data);
          setLoading(false);*/
      });
    };
    loadComunas();
  }, []);
  //https://apis.digital.gob.cl/dpa/comunas

  const state = useSelector((state) => state.CartReducer);
  let total = 0;

  const renderComuna = (e, i) => {
    return (
      <option key={e.codigo} value={e.nombre}>
        {e.nombre}
      </option>
    );
  };

  const itemList = (item) => {
    total = total + item.price;

    return (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">{item.name}</h6>
            <small className="text-muted">{item.description}</small>
          </div>
          <span className="text-muted">${item.price}</span>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="container-sm">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Su Pedido</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {}
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (CLP)</span>
                <strong>${total}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Dirección de Envio</h4>
            <form className="needs-validation was-validated" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Ingrese su nombre"
                    required=""
                  />
                  <div className="invalid-feedback">Nombre es requerido.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Apellido"
                    required=""
                  />
                  <div className="invalid-feedback">Apellido requerido.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Requerido)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese un correo válido.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Calle *** N°***"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Debe ingresar una dirección para el despacho.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Otros detalle dirección{' '}
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Villa, sector, etc."
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    Comuna
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Seleccione...</option>
                    {/* { this.props.comunas.map(this.renderOption) } {filter.map((product) => { /*/}
                    {comunas.map(renderComuna)}
                  </select>
                  <div className="invalid-feedback">
                    Ingrese una comúna válida.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Usaré mi dirección de envio como dirección de facturación.
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Grabar mis datos para la próxima visita.
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Medio de Pago</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="webpay"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    WebPay
                  </label>
                  <img
                    src="../assets/images/pay/1.Webpay_FB_80px.svg"
                    alt="webpay"
                    height="80px"
                    width="80px"
                  />
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    Mercado Pago
                  </label>

                  <img
                    src="../assets/images/pay/mercado-pago.svg"
                    alt="MercadoPago"
                    height="80px"
                    width="80px"
                  />
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continuar con el pago
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
