import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Reservations from './components/Reservations.js';
import Contact from './components/Contact.js';
import Blog from './components/Blog.js';
import logo from './imagenes/logo.png';

function App() {
  return (
    <Router>
     <div className="App">
     <nav>
     <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Usa la variable logo aquí */}
          </div>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/reservations">Reservaciones</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
