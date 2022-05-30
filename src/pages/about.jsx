import React from 'react';

const about = () => {
  return (
    <>
      <div className="container py-4" bis_skin_checked="1">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../assets/images/taller.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">NUESTRO CONCEPTO</h2>
                <p className="card-text">
                  Por mucho tiempo, hemos utilizado la creatividad,la pasión y
                  la belleza de naturaleza para crear un concepto único e
                  irrepetible, donde la dedicación, la pasciencia y el amor por
                  la madera están presentes en cada exclusivo diseño. En un
                  mundo acelerado y desechable, nuestra apuesta es sustentable y
                  duradera, ejecutando cada proyecto con la dedicación adecuada;
                  Pensamos siempre en producir ejemplares que resistan el paso
                  del tiempo siendo protagonistas de cada espacio.
                </p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-md-stretch" bis_skin_checked="1">
          <div className="col-md-6" bis_skin_checked="1">
            <div
              className="h-100 p-5 text-white bg-dark rounded-3"
              bis_skin_checked="1"
            >
              <h2>Nuestro Taller</h2>
              <p className="text-sm-start">
                En nuestro taller, seleccionamos cuidadosamente las materias
                primas y trabajamos minuciosamente cada uno de los detalles.
                Esta labor de artesano y de maestro smueblistas, quienes, con
                años de experiencia son capaces de construir muebles
                exclusivos,altamente resistentes y de noble sello.
              </p>
            </div>
          </div>
          <div className="col-md-6" bis_skin_checked="1">
            <div
              className="h-100 p-5 bg-info border rounded-3"
              bis_skin_checked="1"
            >
              <h2>Nuestra Visión</h2>
              <p>
                Consolidarnos como una empresa regional, familiar y de solidos
                principios, en el que el amor por el trabajo, la dedicación y la
                calidad, sea un sello que nos distinga de cualquiera.
              </p>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          © 2022 Decomaderas La Serena
        </footer>
      </div>
    </>
  );
};

export default about;
