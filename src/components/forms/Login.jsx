import React from 'react';

const Login = () => {
  return (
    <>
      {' '}
      <>
        <button
          type="button"
          className="btn btn-outline-warning ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          {' '}
          <span className="fa fa-sign-in"></span>
          Login
        </button>

        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                  {' '}
                  <span className="fa fa-google me-2"></span>
                  Ingresar con Google
                </button>
                <form>
                  <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Check1"
                    />
                    <label className="form-check-label" htmlFor="Check1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-5">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
