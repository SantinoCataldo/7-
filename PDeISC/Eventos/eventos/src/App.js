import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import RealTimeForm from './Components/RealTimeForm/RealTimeForm';
import NumberGame from './Components/NumberGame/NumberGame';
import InteractiveButtons from './Components/InteractiveButtons/InteractiveButtons';

import Presentation from './Components/Presentation/Presentation';
import AutoSaveNote from './Components/AutoSaveNote/AutoSaveNote';


function App() {


  return (
    <section className="App">
      <div className="main-container" >
        <Presentation/>
        <ImageGallery />
        <RealTimeForm />
        <NumberGame/>
        <InteractiveButtons />
        <AutoSaveNote/>
      </div>
    </section>
  );
}

export default App;
