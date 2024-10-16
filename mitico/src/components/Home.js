import React, { useRef } from 'react';


function Home() {
  const contentRef = useRef(null);

  const handleScroll = () => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="home-header">
        <h1>Bienvenidos a Mítico Café</h1>
        <p>¡Cada mañana es especial!</p>
        <button className="scroll-button" onClick={handleScroll}>
          Desplázate hacia abajo
        </button>
      </header>

      <section ref={contentRef} className="home-content">
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet libero eu neque facilisis, 
          non viverra nisi ultricies. Phasellus non sem eget purus sollicitudin facilisis a nec tortor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt nunc quis mi vulputate, 
          sed dictum libero sodales. Donec sollicitudin lorem id dapibus accumsan.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel massa eget arcu venenatis tempor. 
          Aenean a augue urna.
        </p>
      </section>

      <footer className="home-footer">
        <p>Mítico - Aurelio Ortega 863, Jardines de La Seattle, Zapopan</p>
        <p>Horario: Lunes a Domingo de 7:45am a 2:00pm</p>
        <p>Teléfono: 3312937187</p>
      </footer>
    </div>
  );
}

export default Home;