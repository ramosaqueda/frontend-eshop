import React, { useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createOrUpdateUser } from '../functions/auth';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validations
    if (!email || !password) {
      toast.error('Email y  password son requeridos');
      return;
    }

    if (password < 6) {
      toast.error('La password no puede tener menos de 6 caracteres');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        // remove user email from local storage
        window.localStorage.removeItem('emailForRegistration');
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        console.log('user', user, 'idTokenResult', idTokenResult);

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
          })
          .catch((err) => console.log(err));

        // redirect
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          disabled
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Completar Registro
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>
            Registro Completo
            <small class="text-muted">
              Ahora ingrese una contraseña (mayor a 6 caracteres)
            </small>
          </h3>

          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
