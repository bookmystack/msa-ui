import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1em', marginTop: '2em', backgroundColor: '#333', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} MSA Website. All Rights Reserved.</p> {/* [cite: 1] */}
      {/* Add any other footer links or information as needed */}
    </footer>
  );
};

export default Footer;
