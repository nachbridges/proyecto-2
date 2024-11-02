import React from 'react';
import './Menu.css';
import mostPopularDish from '../imagenes/mila.jpg';
import paraComenzarImage from '../imagenes/ambos.png';
import dulcesImage from '../imagenes/bowlDeAvena.JPG';
import panDulceImage from '../imagenes/ambos.png';
import molletesImage from '../imagenes/bowlDeAvena.JPG';
import sandwichImage from '../imagenes/ambos.png';
import chilaquilesImage from '../imagenes/bowlDeAvena.JPG';
import frappuccinosImage from '../imagenes/ambos.png';
import cafeImage from '../imagenes/bowlDeAvena.JPG';

function Menu() {
  return (
    <div>
      {/* Encabezado del Menú */}
      <div className="menu-header">
        <h1>NUESTRO MENÚ</h1>
        <p>A continuación te presentamos la variedad de opciones que puedes disfrutar de nuestra carta.</p>
      </div>

      {/* Sección: El más pedido */}
      <div className="most-popular">
        <h2>El más pedido</h2>
        <div className="popular-dish">
          <img src={mostPopularDish} alt="El más pedido" />
          <div>
            <h3>Sandwich De Roast Beef</h3>
            <p>Sandwich con la mejor calidad en roast beef, con arúgula, mostaza d'jon y cebolla morada.</p>
          </div>
        </div>
      </div>

      {/* Sección: Para Comenzar */}
      <div className="menu-section">
        <h2>Para Comenzar</h2>
        <img src={paraComenzarImage} alt="Para Comenzar - Imagen" className="section-image" />
        <div className="menu-items">
          <div className="menu-item">
            <span>BOWL DE AVENA</span>
            <span>95</span>
          </div>
          <div className="menu-item">
            <span>YOGURT CON FRUTA</span>
            <span>80</span>
          </div>
          <div className="menu-item">
            <span>PITA CON HUMMUS</span>
            <span>95</span>
          </div>
        </div>
      </div>

      {/* Sección: Dulces */}
      <div className="menu-section">
        <h2>Dulces</h2>
        <img src={dulcesImage} alt="Dulces - Imagen" className="section-image" />
        <div className="menu-items">
          <div className="menu-item">
            <span>PAN FRANCÉS</span>
            <span>95</span>
          </div>
          <div className="menu-item">
            <span>HOT CAKES</span>
            <span>95</span>
          </div>
          <div className="menu-item">
            <span>WAFFLES</span>
            <span>95</span>
          </div>
        </div>
      </div>

      {/* Sección: Pan Dulce */}
      <div className="menu-section">
        <h2>Pan Dulce</h2>
        <img src={panDulceImage} alt="Pan Dulce - Imagen" className="section-image" />
        <div className="menu-items">
          <div className="menu-item">
            <span>PIEZA</span>
            <span>45</span>
          </div>
        </div>
      </div>

      {/* Sección: Molletes */}
      <div className="menu-section">
        <h2>Molletes</h2>
        <img src={molletesImage} alt="Molletes - Imagen" className="section-image" />
        <div className="menu-items">
          <div className="menu-item">
            <span>SALADOS</span>
            <span>85</span>
          </div>
          <div className="menu-item">
            <span>CON CHORIZO O CHICHARRÓN</span>
            <span>95</span>
          </div>
          <div className="menu-item">
            <span>DULCES</span>
            <span>75</span>
          </div>
        </div>
      </div>

        {/* Sección: Sandwiches */}
      <div className="menu-section">
        <h2>Sandwich</h2>
          <img src={sandwichImage} alt="Sandwich - Imagen 1" />
        <div className="menu-items">
          <div className="menu-item">
            <span>CHEESE SANDWICH</span>
            <span>145</span>
          </div>
          <div className="menu-item">
            <span>SANDWICH ROAST BEEF</span>
            <span>180</span>
          </div>
          <div className="menu-item">
            <span>SANDWICH MILANESA</span>
            <span>145</span>
          </div>
        </div>
      </div>

      {/* Sección: Chilaquiles */}
      <div className="menu-section">
        <h2>Chilaquiles</h2>
          <img src={chilaquilesImage} alt="Chilaquiles - Imagen 1" />
        <div className="menu-items">
          <div className="menu-item">
            <span>CHILAQUILES ROJOS / VERDES</span>
            <span>75</span>
          </div>
          <div className="menu-item">
            <span>CHILAQUILES MÍTICOS</span>
            <span>95</span>
          </div>
        </div>
      </div>

      {/* Sección: Bebidas Frías y Frappuccinos */}
      <div className="menu-section">
        <h2>Bebidas Frías y Frappuccinos</h2>
          <img src={frappuccinosImage} alt="Bebidas Frías - Imagen 1" />
        <div className="menu-items">
          <div className="menu-item">
            <span>FRIZZ FRUTAL</span>
            <span>65</span>
          </div>
          <div className="menu-item">
            <span>COFFEE SPRITZER</span>
            <span>60</span>
          </div>
          <div className="menu-item">
            <span>FRAPPUCCINO CLÁSICO</span>
            <span>55</span>
          </div>
        </div>
      </div>

      {/* Sección: Café y Té */}
      <div className="menu-section">
        <h2>Café y Té</h2>
          <img src={cafeImage} alt="Café y Té - Imagen 1" />
        <div className="menu-items">
          <div className="menu-item">
            <span>AMERICANO</span>
            <span>35</span>
          </div>
          <div className="menu-item">
            <span>MOKA</span>
            <span>50</span>
          </div>
          <div className="menu-item">
            <span>LATTE</span>
            <span>45</span>
          </div>
        </div>
      </div>

      {/* Puedes seguir agregando más secciones en este formato si es necesario */}
    </div>
  );
}

export default Menu;