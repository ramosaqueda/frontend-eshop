import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <NavLink
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </NavLink>

            {/* Twitter */}
            <NavLink
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </NavLink>

            {/* Google */}
            <NavLink
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </NavLink>

            {/* Instagram */}
            <NavLink
              className="btn btn-outline-light btn-floating m-1"
              to="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </NavLink>
          </section>
          {/* Section: Social media */}

          {/* Section: Text */}
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          {/* Section: Text */}

          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-3 mb-md-0">
                <h3 className="text-uppercase">Decomaderas</h3>
                <h5 className="text-uppercase">La Serena</h5>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-3 mb-md-0 text-start">
                <h5 className="text-uppercase">Información</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <NavLink to="#!" className="text-white">
                      Despachos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products" className="text-white">
                      Productos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories" className="text-white">
                      Categorias
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="text-white">
                      Acerca de nosotros
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-3 mb-md-0">
                <h5 className="text-uppercase">Medios de Pago</h5>

                <div>
                  <img src="/assets/images/pay/1.Webpay_FB_80px.svg" alt="" />
                </div>
                <div>
                  <img src="/assets/images/pay/mercado-pago.svg" alt="" />
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3">
          © 2020 Decomaderas:
          <NavLink className="text-white" to="#">
            By Rafael Ramos Aqueda
          </NavLink>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
