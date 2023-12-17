import {Accordion} from './components/Accordion/Accordion'
import './App.css';
import { Data } from './components/AccordionData'
function App() {
  return (
    <div className="App">
      <Accordion
      
      AccordionData={Data}></Accordion>
    </div>
  );
}

export default App;
