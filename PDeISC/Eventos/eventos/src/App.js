import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import RealTimeForm from './Components/RealTimeForm/RealTimeForm';
import NumberGame from './Components/NumberGame/NumberGame';
import InteractiveButtons from './Components/InteractiveButtons/InteractiveButtons';


function App() {
  return (
    <section className="App">
      <div className="main-container">
        <ImageGallery />
        <RealTimeForm />
        <NumberGame/>
        <InteractiveButtons />
      </div>
    </section>
  );
}

export default App;
