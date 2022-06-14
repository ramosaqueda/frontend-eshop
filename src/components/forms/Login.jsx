import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from '../../firebase-config';

import { createOrUpdateUser, currentUser } from '../../functions/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';

const Login = ({ history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    if (res.data.role === 'admin') {
      history.push('/admin/adminpage');
    } else {
      history.push('/');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      currentUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: 'LOGGED_IN_USER',
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });

          //roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  /*const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
        //history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  */

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="InputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="InputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="InputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="InputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-5">
        Ingresar
      </button>
    </form>
  );

  return (
    <>
      {' '}
      <>
        <ToastContainer />
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
                {loginForm()}

                <button className="btn btn-primary w-100 mb-4">
                  {' '}
                  <span className="fa fa-google me-2"></span>
                  Ingresar con Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
