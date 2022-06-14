import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase-config';

import { sendSignInLinkToEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
  }, [history, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, config);
    toast.success(
      `Un correo ha sido enviado a ${email}. haga click en el Link para completar confirmación`
    );
    window.localStorage.setItem('emailForRegistration', email);
    setEmail('');
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={process.env.REACT_APP_REGISTER_REDIRECT_URL}
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );
  return (
    <>
      {' '}
      <>
        <button
          type="button"
          className="btn btn-outline-warning ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          {' '}
          <span className="fa fa-user-plus me-1"></span>
          Registrese
        </button>

        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">
                  Registro
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{registerForm()}</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Register;
