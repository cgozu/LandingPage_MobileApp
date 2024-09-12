import React from 'react';
import '../styles/About.css';
import panel1 from '../assets/panel1.png'; // Ajusta la extensión si es diferente
import panel2 from '../assets/panel2.png'; // Ajusta la extensión si es diferente
import panel3 from '../assets/panel3.png'; // Ajusta la extensión si es diferente

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Sobre Nosotros</h2>
        <p className="about-text">
          En CarConnect, revolucionamos el alquiler de autos, ofreciendo una plataforma intuitiva y segura para que los usuarios puedan encontrar el vehículo perfecto. Con procesos rápidos y sencillos, tanto arrendadores como arrendatarios disfrutan de la confianza y la facilidad de uso que proporcionamos.
        </p>
      </div>
      <div className="commitment-container">
        <h3>Nuestro Compromiso</h3>
        <div className="commitment-cards">
          <div className="commitment-card">
            <img src={panel1} alt="Seguridad y Confianza" />
            <h4>Seguridad y Confianza</h4>
            <p>Mantén siempre el control de tu auto y asegura transacciones confiables entre usuarios.</p>
          </div>
          <div className="commitment-card">
            <img src={panel2} alt="Servicios Descuentos Exclusivos" />
            <h4>Servicios Descuentos Exclusivos</h4>
            <p>Ofrecemos descuentos para arrendatarios frecuentes y vehículos especiales.</p>
          </div>
          <div className="commitment-card">
            <img src={panel3} alt="Variedad de Autos" />
            <h4>Variedad de Autos</h4>
            <p>Nuestros arrendadores ofrecen una amplia variedad de autos que se ajustan a cualquier necesidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
