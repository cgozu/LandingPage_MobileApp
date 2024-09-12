import React, { useState } from 'react';
import '../styles/Testimonials.css';
import img1 from '../assets/test1.png'; // Ajusta la extensión si es diferente
import img2 from '../assets/test2.png'; // Ajusta la extensión si es diferente
import img3 from '../assets/test3.png'; // Ajusta la extensión si es diferente

const testimonialsData = [
  {
    name: "Andrea García",
    text: "El servicio al cliente es excelente. Tuve un problema con la reserva, pero el equipo de DriveNow lo resolvió rápidamente. Definitivamente seguiré usando la plataforma.",
    image: img1,
  },
  {
    name: "Elizabeth Mendoza",
    text: "Como propietario, DriveNow me ha permitido generar ingresos adicionales alquilando mi auto. Es fácil gestionar las reservas y tengo total control sobre el proceso. ¡Muy recomendable!.",
    image: img2,
  },
  {
    name: "Carlos Rojas",
    text: "DriveNow ha cambiado completamente la forma en que alquilo autos. La plataforma es sencilla de usar, y me encanta la variedad de vehículos disponibles. Además, siempre encuentro opciones a precios accesibles.",
    image: img3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>TESTIMONIOS</h2>
      <div className="testimonial-carousel">
        {testimonialsData.map((testimonial, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
          const isNext = index === (currentIndex + 1) % testimonialsData.length;

          return (
            <div
              key={index}
              className={`testimonial-card ${isActive ? 'active' : isPrev ? 'prev' : isNext ? 'next' : ''}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="testimonial-navigation">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`nav-circle ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
