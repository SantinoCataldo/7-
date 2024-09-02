import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import RealTimeForm from './Components/RealTimeForm/RealTimeForm';
import NumberGame from './Components/NumberGame/NumberGame';


function App() {
  return (
    <section className="App">
      <div className="main-container">
        <ImageGallery />
        <RealTimeForm />
        <NumberGame/>
      </div>
    </section>
  );
}

export default App;
