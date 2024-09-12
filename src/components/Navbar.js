import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CarConnect</div>
      <ul className="navbar-menu">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li> {/* Enlace que redirige a la sección "Sobre Nosotros" */}
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#login" className="navbar-login">Ingresar</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
