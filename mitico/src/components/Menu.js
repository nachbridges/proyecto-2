import React, { useState } from 'react';
import './Menu.css';
import menuHeaderImage from '../imagenes/fondoMenu.jpg';

// Importación de imágenes de los platillos
import bowlDeAvena from '../imagenes/bowlDeAvena.JPG';
import ambos from '../imagenes/ambos.png';
import panFrances from '../imagenes/panFrances.jpg';
import waffles from '../imagenes/Waffles.jpg';
import panaderia from '../imagenes/panaderia.jpg';
import tartaleta from '../imagenes/tartaleta.jpg';
import molletes1 from '../imagenes/molletes_.jpg';
import molletes2 from '../imagenes/molletes.jpg';
import chilaMole from '../imagenes/chilaMole.JPG';
import chilaVerdes from '../imagenes/chilaVerdes.png';
import huevosRevueltos from '../imagenes/huevosRevueltos.jpg';
import omellet from '../imagenes/omellet.jpg';
import enchiladasSuizas from '../imagenes/enchiladasSuizas.jpg';
import enmoladas from '../imagenes/enmoladas.jpg';
import cheeseSandwich from '../imagenes/cheeseSandwich.jpg';
import mila from '../imagenes/mila.jpg';
import chispas from '../imagenes/chispas.JPG';
import galletas from '../imagenes/galletas.png';
import toast from '../imagenes/toast.jpg';
import toastMitico from '../imagenes/toastMitico.JPG';
import quesadillasFritas from '../imagenes/quesadillasFritas.jpg';
import quesadillas from '../imagenes/quesadillas.jpg';
import bistec from '../imagenes/bistec.jpg';
import bistecMexicana from '../imagenes/bistecMexicana.jpg';

const menuSections = {
  "Para Comenzar": [
    { name: "Bowl de Avena", description: "Fruta de temporada, cottage, quinoa, chía y leche de almendra", price: 95 },
    { name: "Yogurt con Fruta", description: "Con granola, coco tostado o almendras", price: 80 },
  ],
  "Dulces": [
    { name: "Pan Francés", description: "Con helado de vainilla y fruta", price: 95 },
    { name: "Hot Cakes", description: "Con leche entera, miel de maple o cajeta", price: 95 },
    { name: "Waffles", description: "Con fruta y helado de vainilla", price: 95 },
  ],
  "Pan Dulce": [
    { name: "Pieza", description: "Pregunte a su mesero por las opciones del día", price: 45 },
  ],
  "Molletes": [
    { name: "Salados", description: "Con frijoles negros, costa de queso y salsa mexicana", price: 85 },
    { name: "Con chorizo o chicharrón", description: "Molletes con opción de chorizo o chicharrón", price: 95 },
    { name: "Dulces", description: "Con mantequilla, elige tu ingrediente adicional: azúcar con canela, mermelada de fresa, cajeta, lechecilla", price: 75 },
  ],
  "Chilaquiles": [
    { name: "Chilaquiles Rojos", description: "Con crema, queso y cebolla", price: 75 },
    { name: "Verdes / Divorciados", description: "Con crema, queso y cebolla", price: 95 },
    { name: "Chilaquiles Míticos", description: "Salsa a elegir: chipotle, morita, poblanos, mole", price: 95 },
  ],
  "Huevos": [
    { name: "Machaca con Huevo", description: "Con jitomate, cebolla, chile cuaresmeño, cilantro, pimientos y frijoles negros", price: 120 },
    { name: "Huevos al Gusto", description: "Revueltos con un ingrediente a elegir", price: 95 },
    { name: "Huevos Estrellados", description: "Naturales, rancheros o divorciados", price: 95 },
    { name: "Omelet", description: "Todos con queso, elige un ingrediente", price: 95 },
    { name: "Huevos Turcos", description: "Pimientos y cebolla salteados, con tomate y queso", price: 105 },
  ],
  "Enchiladas": [
    { name: "Enmoladas", description: "Orden de 3, rellenas de pollo", price: 135 },
    { name: "Enchiladas Suizas", description: "Orden de 3 rellenas de pollo y gratinadas", price: 135 },
  ],
  "Sandwich": [
    { name: "Cheese Sandwich", description: "Aderezo de mostaza, aderezo césar, jamón de pavo, pimientos y fondue de queso", price: 145 },
    { name: "Sandwich Roast Beef", description: "Mostaza, col morada, pepinillo, jalapeños y aderezo de chiles", price: 180 },
    { name: "Sandwich Milanesa", description: "Lechuga, pepino y col morada, limón, sal y aderezo de chiles encurtidos", price: 145 },
  ],
  "Galletas": [
    { name: "Galleta de Maicena", description: "Preparadas con mantequilla y leche", price: 35 },
    { name: "Galleta de Chispas de Chocolate", description: "Con chispas de chocolate", price: 45 },
  ],
  "Toast": [
    { name: "Portobello Capresse", description: "Mozzarella fresca y tomate cherry con albahaca a balsámico sobre portobello", price: 90 },
    { name: "Toast Mítico", description: "Con tocino, miel con dijon, reducción de balsámico y huevo pochado", price: 140 },
    { name: "Toast Pesto", description: "Con queso burrata, cherry, queso burrata, albahaca, ajo y pesto", price: 160 },
    { name: "Toast Serrano", description: "Con queso burrata, pera, jamón serrano y miel", price: 155 },
  ],
  "Quesadillas": [
    { name: "A la Plancha", description: "Orden de 3 piezas con tortilla de maíz y queso, con frijoles negros", price: 95 },
    { name: "Fritas", description: "Orden de 3 piezas, rellenas de queso, naturales o con chicharrón prensado", price: 95 },
  ],
  "Guisos": [
    { name: "Chicharrón en Salsa Verde", description: "Chicharrón prensado en salsa verde acompañado con frijoles negros", price: 130 },
    { name: "Bistec a la Mexicana", description: "Carne de res en salsa de tomate, cebolla, cilantro y un toque de picante. Acompañada de frijoles negros", price: 130 },
  ],
};

// Definir las imágenes de cada sección
const sectionImages = {
  "Para Comenzar": [bowlDeAvena, ambos],
  "Dulces": [panFrances, waffles],
  "Pan Dulce": [panaderia, tartaleta],
  "Molletes": [molletes1, molletes2],
  "Chilaquiles": [chilaMole, chilaVerdes],
  "Huevos": [huevosRevueltos, omellet],
  "Enchiladas": [enchiladasSuizas, enmoladas],
  "Sandwich": [cheeseSandwich, mila],
  "Galletas": [chispas, galletas],
  "Toast": [toast, toastMitico],
  "Quesadillas": [quesadillasFritas, quesadillas],
  "Guisos": [bistec, bistecMexicana],
};

function Menu() {
  const [activeSection, setActiveSection] = useState(Object.keys(menuSections)[0]);

  return (
    <div className="menu-container">
      {/* Encabezado del Menú con imagen de fondo */}
      <div className="menu-header" style={{ backgroundImage: `url(${menuHeaderImage})` }}>
        <h1>NUESTRO MENÚ</h1>
        <p>Explora la variedad de opciones que puedes disfrutar en nuestra carta.</p>
      </div>

      <div className="menu-content-container">
        {/* Sidebar de secciones */}
        <div className="menu-sidebar">
          <h2>Menú</h2>
          {Object.keys(menuSections).map(section => (
            <div
              key={section}
              className={`menu-section ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </div>
          ))}
        </div>

        {/* Contenido de la sección seleccionada */}
        <div className="menu-content">
          <h3>{activeSection}</h3>
          <div className="menu-items">
            {menuSections[activeSection].map(item => (
              <div className="menu-item" key={item.name}>
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-description">{item.description}</div>
                <div className="menu-item-price">${item.price}</div>
              </div>
            ))}
          </div>

          {/* Imágenes de la sección */}
          <div className="menu-images">
            {sectionImages[activeSection].map((image, index) => (
              <img key={index} src={image} alt={`${activeSection} platillo ${index + 1}`} className="menu-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;