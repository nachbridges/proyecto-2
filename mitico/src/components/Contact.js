import React, { useState } from 'react';
import './Contact.css';
import fondoContacto from '../imagenes/fondoContacto.jpg';
import sobreNosotros from '../imagenes/sobreNosotros.jpg';
import terraza from '../imagenes/terraza.jpg';
import interior from '../imagenes/interior.jpg';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true); // Marcar como verificado si se completa reCAPTCHA
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaVerified) {
      alert("Formulario enviado con éxito.");
      // Aquí puedes agregar la lógica para enviar el formulario al servidor
    } else {
      alert("Por favor, completa el reCAPTCHA.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header" style={{ backgroundImage: `url(${fondoContacto})` }}>
        <h1>CONTACTO</h1>
        <p>Para nosotros, tu opinión es muy importante. ¡Contáctanos y cuéntanos tu experiencia!</p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" placeholder="Escribe aquí" required />

          <label>Teléfono:</label>
          <input type="tel" placeholder="(00) 0000 0000" required />

          <label>Email:</label>
          <input type="email" placeholder="Escribe aquí" required />

          <label>Mensaje:</label>
          <textarea placeholder="Escribe aquí" required></textarea>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6LfKQ3UqAAAAAFZq4GyfeDbT2O_7ni_2k5Nrw6y5" // Reemplaza con tu clave de sitio
            onChange={handleCaptchaChange}
          />

          <button type="submit" disabled={!captchaVerified}>Enviar</button>
          <p className="contact-message">Para nosotros es muy importante tu opinión.</p>
        </form>

        <div className="contact-gallery">
          <div className="gallery-item">
            <img src={sobreNosotros} alt="Sobre Nosotros" />
          </div>
          <div className="gallery-item">
            <img src={terraza} alt="Terraza" />
          </div>
          <div className="gallery-item">
            <img src={interior} alt="Interior" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;