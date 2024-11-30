import React from 'react'
import Navbar from "../layout/Navbar";
import DynamicModal from "../layout/DynamicModal";
import "../Login.css"; 

const Login = () => {
  return (

<div className="login-container">

      <h2>Inicio de sesión</h2>
      <p>
        ¿Todavía no ha tenido una cuenta?{" "}
        <a href="/register" className="create-account-link">
          Crear cuenta
        </a>
      </p>
      <form className="login-form">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />
        <a href="/forgot-password" className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="login-actions">
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
          <a href="/" className="back-to-store-link">
            Volver a la tienda
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login