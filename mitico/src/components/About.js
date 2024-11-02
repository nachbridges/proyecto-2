import React from 'react';
import '../About.css';
import espacioImage from '../imagenes/espacio.jpg';
import lentejaImage from '../imagenes/lenteja.png';
import garbanzoImage from '../imagenes/garbanzo.png';
import ambosImage from '../imagenes/ambos.png';
import terrazaImage from '../imagenes/terraza.jpg';
import arenaImage from '../imagenes/arena.jpg';
import interiorImage from '../imagenes/interior.jpg';

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function About() {
  return (
    <div>
      {/* Sección de "Sobre Nosotros" con imagen de fondo */}
      <div className="about-container">
        <h1>Sobre Nosotros</h1>
        <p>MÍTICO es una experiencia nacida del anhelo de crear momentos inolvidables que puedas disfrutar y compartir con quienes amas...</p>
      </div>

      {/* Nueva Sección de "Nuestra Historia" */}
      <div className="history-section">
        <h2>Nuestra Historia</h2>
        <p>
          Bienvenidos a Mítico, el lugar donde cada desayuno cuenta una historia. Nos enorgullece contarles cómo comenzó esta maravillosa travesía que nos permitirá convertirnos en el rincón favorito de los amantes de los desayunos.
          </p><p>
          Desde hace años, la satisfacción por el buen comer nos encaminó a querer compartir esta experiencia con más personas. Así nació Mítico, nuestro pequeño rincón de placer matutino.
          </p><p>
          La historia de Mítico no es solo sobre el arte culinario, sino sobre la pasión que compartimos como familia. Desde cero, construimos este sueño, y cada día, nuestras manos han dado forma a un lugar acogedor donde la tradición se mezcla con la innovación.
          </p><p>
          Con años de experiencia en el ramo, hemos aprendido que cada plato es una oportunidad para contar una historia. Desde los clásicos hasta las creaciones más audaces, nuestro menú refleja la dedicación y el amor que ponemos en cada detalle. Cada ingrediente es seleccionado con esmero, y cada plato es una obra de arte que refleja nuestra experiencia en satisfacer las necesidades más exigentes de nuestros comensales.
          </p><p>
          En Mítico, no solo servimos desayunos, sino momentos inolvidables. Cada risa compartida, cada conversación entre amigos, y cada bocado delicioso es parte de nuestra historia. Nos enorgullece ser parte de las mañanas de tantas personas, brindando una experiencia gastronómica única que va más allá de un simple desayuno.
          </p><p>
          Agradecemos a todos nuestros clientes por ser parte de nuestra historia, por permitirnos crecer y mejorar cada día. En Mítico, no solo encontrará una deliciosa comida matutina, sino un pedacito de nuestro corazón en cada plato.
          </p><p>
          ¡Les damos la bienvenida a Mítico, donde cada desayuno es una experiencia y cada cliente es parte de nuestra gran familia!
        </p>
      </div>
      <div className="features-container">
        <div className="features-info">
          <div className="feature">
            <div className="icon">📦</div>
            <h3 className="feature-title">Espacio</h3>
            <p>Tenemos la capacidad en el lugar de recibir a más de 80 comensales a la vez, para que no tengas que esperar para deleitarte con un delicioso desayuno.</p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">☕</div>
            <h3 className="feature-title">Café</h3>
            <p>Directo de Huatusco, Veracruz, disfruta una deliciosa taza de nuestro café orgánico de especialidad.</p>
          </div>
          <hr />
          <div className="feature">
            <div className="icon">🎶</div>
            <h3 className="feature-title">Atmósfera Relajante</h3>
            <p>Ven a pasar un rato ameno en compañía de nosotros y olvídate del estrés por unos instantes.</p>
          </div>
        </div>
        
        {/* Columna de Imagen */}
        <div className="features-image">
          <img src={espacioImage} alt="Espacio del restaurante" />
        </div>
      </div>
      <div className="tasting-section">
        <div className="tasting-info">
          <h2>Déjate Consentir</h2>
          <p>
            Disfruta de nuestro aperitivo de bienvenida, nuestro exquisito pan pita crocante con hummus de garbanzo y de lenteja con el toque de la casa. Cortesía de la casa.
          </p>
          <button className="menu-button">MIRA NUESTRO MENÚ COMPLETO</button>
        </div>
        
        {/* Imágenes de Pita */}
        <div className="tasting-images">
          <div className="tasting-item">
            <img src={lentejaImage} alt="Pita con hummus de lenteja" />
            <p>Pita con hummus de lenteja</p>
          </div>
          <div className="tasting-item">
            <img src={garbanzoImage} alt="Pita con hummus de garbanzo" />
            <p>Pita con hummus de garbanzo</p>
          </div>
          <div className="tasting-item">
            <img src={ambosImage} alt="Disfruta de ambos" />
            <p>Disfruta de ambos</p>
          </div>
        </div>
      </div>
      <div className="visit-section">
        <h2>Visítanos</h2>
        <p className="visit-description">
          Ubicados en el corazón de la colonia Seattle, MÍTICO te espera con las puertas abiertas de par en par. No te preocupes por el lugar, tenemos espacio suficiente y varias elecciones para recibirte con el cariño que mereces.
        </p>
        
        {/* Contenedor de las Imágenes y Descripciones */}
        <div className="visit-images">
          <div className="visit-item">
            <img src={terrazaImage} alt="Terraza" />
            <h3>Terraza</h3>
            <p>Con una maravillosa vista al exterior. Déjate conquistar por las áreas verdes que ofrece el camellón lleno de frondosos árboles.</p>
          </div>
          <div className="visit-item">
            <img src={arenaImage} alt="Con La Arena A Tus Pies" />
            <h3>Con La Arena A Tus Pies</h3>
            <p>Vive una experiencia diferente. En nuestra zona playera, inspirada en ciudades míticas como Tulum.</p>
          </div>
          <div className="visit-item">
            <img src={interiorImage} alt="En El Interior" />
            <h3>En El Interior</h3>
            <p>Si lo tuyo es alejarte del mundo, elige una de nuestras mesas al interior, junto a la barra donde disfrutarás del exquisito olor a café.</p>
          </div>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="social-icons">
          <a href="https://bit.ly/FacebookMítico" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://bit.ly/InstagramMítico" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://bit.ly/TikTokMitico" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://bit.ly/WhatsAppMítico" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://bit.ly/UbicaciónMítico" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default About;