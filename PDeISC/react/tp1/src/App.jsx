import './App.css'; 
import Tarjeta from './Components/Tarjeta/Tarjeta';
import Contador from './Components/Contador/Contador';
import ListaDeTareas from './Components/ListaDeTareas/ListaDeTareas';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Tarjeta
        nombre="Santino"
        apellido="Cataldo"
        profesion="Sodero"
        imagenSrc="./alumnospng.png"
      />
      <Formulario />
      <Contador />
      <ListaDeTareas />
    </div>
  );
}

export default App;
