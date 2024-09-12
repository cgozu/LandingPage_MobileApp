import React from 'react';

const Contact = () => {
  return (
    <section style={styles.container}>
      <div style={styles.text}>¿Tienes alguna pregunta?</div>
      <button style={styles.button}>Contáctanos</button>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D1E2C', // Color negro
    padding: '20px',
    width: '100%', // Ocupará el ancho completo del contenedor padre
    boxSizing: 'border-box', // Incluye padding y border en el ancho total
  },
  text: {
    color: '#FFFFFF', // Letra blanca
    fontSize: '48px',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F8833B', // Color naranja
    color: '#FFFFFF', // Letra blanca
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

export default Contact;
