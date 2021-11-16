
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Projects/>
      
    </div>
  );
}

export default App;
