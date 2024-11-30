import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import CarritoModal from "../components/CarritoModal";

// Logos
import glow from "../assets/logos/gloww.png";
import lunavie from "../assets/logos/lunavie.png";
import lumiere from "../assets/logos/lumiere.png";

function Navbar() {
  const [navbarColor, setNavbarColor] = useState("#D4AF37"); 
  const [bottomBarPosition, setBottomBarPosition] = useState(0); 
  const [logoUrl, setLogoUrl] = useState(lumiere); 
  const [logoRoute, setLogoRoute] = useState("/lumiere"); 
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para manejar el modal del carrito

  const handleNavbarColorChange = (color, position, logo, route) => {
    setNavbarColor(color);
    setBottomBarPosition(position);
    setLogoUrl(logo); 
    setLogoRoute(route); 
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Alterna entre abrir y cerrar el modal
  };

  return (
    <div>
      {/* Barra Superior */}
      <div className="top-bar">
        <button
          onClick={() =>
            handleNavbarColorChange("#D4AF37", 0, lumiere, "/lumiere") 
          }
          className="top-bar-btn"
        >
          Lumiere
        </button>
        <button
          onClick={() =>
            handleNavbarColorChange("#87CEEB", 1, lunavie, "/lunavie") 
          }
          className="top-bar-btn"
        >
          LunaVie
        </button>
        <button
          onClick={() =>
            handleNavbarColorChange("#FFC1CC", 2, glow, "/glow") 
          }
          className="top-bar-btn"
        >
          Glow
        </button>
      </div>

      {/* Contenedor de la Barra Inferior Dinámica */}
      <div className="bottom-bar-container">
        <div
          className="bottom-bar"
          style={{
            backgroundColor: navbarColor,
            transform: `translateX(${bottomBarPosition * 100}%)`,
          }}
        ></div>
      </div>

      {/* Navbar Principal */}
      <nav
        className="navbar"
        style={{ backgroundColor: navbarColor }} 
      >
        <div className="logo">
          {/* Enlace dinámico basado en la tienda */}
          <Link to={logoRoute}>
            <img src={logoUrl} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar producto" />
          <button className="search-icon">&#128269;</button>
        </div>

        <div className="menu-links">
          <Link to="/auth/login">Inicia sesión</Link> 
          <Link to="/profile">
            <span>Mi perfil</span> {/* Ícono de usuario */}
          </Link>
          <span className="cart-icon" onClick={toggleCart}>&#128722;</span> {/* Ícono del carrito */}
        </div>
      </nav>

      {/* Carrito Modal */}
      {isCartOpen && <CarritoModal isOpen={isCartOpen} onClose={toggleCart} />}
    </div>
  );
}

export default Navbar;
