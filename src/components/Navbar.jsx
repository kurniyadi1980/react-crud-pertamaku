// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <Link to="/" style={styles.link}>Home</Link>
//       <Link to="/ninja" style={styles.link}>Data Ninja</Link>
//       <Link to="/services" style={styles.link}>Services</Link>
//       <Link to="/contact" style={styles.link}>Contact</Link>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     padding: '10px',
//     backgroundColor: '#333',
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//   },
// };

// export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/ninja" style={{ marginRight: "15px", color: "white" }}>Data Ninja</Link>
      <Link to="/ninja2" style={{ marginRight: "15px", color: "white" }}>Data Ninja 2</Link>
      <Link to="/about" style={{ marginRight: "15px", color: "white" }}>About</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
