import React from 'react';
import './styles.css'; // Import your styles

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1e4356', color: 'white', textAlign: 'center', padding: '10px 0' }}>
      <p>&copy; {new Date().getFullYear()} COW. All rights reserved.</p>
    </footer>
  );
};

export default Footer;