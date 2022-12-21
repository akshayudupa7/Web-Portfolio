import About from './About';   
 import Home from './Home';
 import Serive from './Service'; 
 import Project from './Project'; 

 import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">   
         <Home />
         <About /> 
          <Serive/>
         <Project /> 
        
         <Contact />
    </div>
  );
}

export default App;