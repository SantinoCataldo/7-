import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import RealTimeForm from './Components/RealTimeForm/RealTimeForm';
import NumberGame from './Components/NumberGame/NumberGame';
import InteractiveButtons from './Components/InteractiveButtons/InteractiveButtons';
import { useRef, useEffect } from 'react';
import Presentation from './Components/Presentation/Presentation';


function App() {

  const mainContainerRef = useRef(null);

  useEffect(() => {
    const container = mainContainerRef.current;
    let scrollPosition = 0; // Para rastrear la posición del scroll

    // Desactiva las teclas de flecha para evitar el desplazamiento
    const disableArrowKeys = (event) => {
      if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleWheelScroll = (event) => {
      event.preventDefault();

      const scrollWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;

      // Desplazamos horizontalmente de manera brusca, un componente a la vez
      if (event.deltaY > 0) {
        // Scroll hacia la derecha
        scrollPosition = Math.min(scrollPosition + containerWidth, scrollWidth - containerWidth);
      } else {
        // Scroll hacia la izquierda
        scrollPosition = Math.max(scrollPosition - containerWidth, 0);
      }

      container.scrollTo({
        left: scrollPosition,
        behavior: 'auto', // Desplazamiento brusco
      });
    };

    if (container) {
      // Listener de scroll con mouse
      container.addEventListener('wheel', handleWheelScroll);
      // Desactivar las teclas de flecha
      window.addEventListener('keydown', disableArrowKeys);

      return () => {
        container.removeEventListener('wheel', handleWheelScroll);
        window.removeEventListener('keydown', disableArrowKeys);
      };
    }
  }, []);

  return (
    <section className="App">
      <div className="main-container" ref={mainContainerRef}>
        <Presentation/>
        <ImageGallery />
        <RealTimeForm />
        <NumberGame/>
        <InteractiveButtons />
      </div>
    </section>
  );
}

export default App;
