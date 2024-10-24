import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Reservations from './components/Reservations.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import ShoppingCart from './components/ShoppingCart.js';
import logo from './imagenes/logo.png';

// Importar FontAwesome para los íconos de redes sociales
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Botón de hamburguesa para pantallas pequeñas */}
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/about" onClick={toggleMenu}>Nosotros</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Galería</Link></li>
            <li><Link to="/menu" onClick={toggleMenu}>Menú</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
            <li><Link to="/reservations" onClick={toggleMenu}>Reservar</Link></li>
          </ul>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>

        {/* Botón flotante del carrito */}
        <Link to="/shopping-cart" className="floating-cart-button">
          🛒
        </Link>
      </div>
    </Router>
  );
}

export default App;