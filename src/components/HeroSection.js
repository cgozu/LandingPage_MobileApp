import React from 'react';
import '../styles/HeroSection.css' // Si estás usando CSS puro
import heroimage from '../assets/heroimage.png'; // Ajusta la extensión si es diferente


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Alquila Autos de Forma Más Fácil y Económica</h1>
        <p>Tu solución de autos en alquiler con disponibilidad en diversas ciudades.</p>
        <button className="hero-button">Explora y Alquila</button>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="HeroImage" />
      </div>
    </section>
  );
};

export default HeroSection;