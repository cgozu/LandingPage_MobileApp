import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h2 style={styles.brand}>CarConnect</h2>
      </div>
      <div style={styles.column}>
        <h3 style={styles.contactTitle}>Contáctanos</h3>
        <p style={styles.contactInfo}>Dirección: Lima, Perú</p>
        <p style={styles.contactInfo}>Teléfono: +51 12345</p>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.copyRight}>© 2024 DriveSafe Perú. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F8833B', // Color negro
    color: '#FFFFFF', // Letra blanca
    padding: '5px',
    fontSize: '14px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  contactTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  contactInfo: {
    margin: '2px 0',
  },
  footerBottom: {
    marginTop: '20px',
    textAlign: 'center',
  },
  copyRight: {
    fontSize: '12px',
  },
};

export default Footer;
