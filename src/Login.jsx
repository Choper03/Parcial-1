import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ entrar }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Nuevo estado

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateFields(newEmail, password); // Validar campos al cambiar el correo
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validateFields(email, newPassword); // Validar campos al cambiar la contraseña
  };

  const validateFields = (newEmail, newPassword) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid =
      newPassword.length >= 7 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword);

    setIsButtonDisabled(!(isEmailValid && isPasswordValid)); // Actualizar el estado del botón
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Resto del código de validación

    alert("Usuario Válido");
    setErrorMessage('');
    entrar();
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isButtonDisabled}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
