import React, { useState, useEffect } from 'react';
import { getCarrusel } from '../functions/carrusel';

const Carrusel = () => {
  const [carrusel, setCarrusel] = useState([]);

  useEffect(() => {
    loadCarrusel();
  }, []);

  const loadCarrusel = () => {
    getCarrusel().then((res) => {
      setCarrusel(res.data);
    });
  };

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {carrusel.map((carr) => (
            <div className={`carousel-item ${carr.active}`}>
              <img
                src={`${carr.img}`}
                className="d-block w-100"
                alt={carr.title}
                height="600px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  {carr.title}
                </h5>
                <p>{carr.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carrusel;
