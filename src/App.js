import '../src/styles/App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Navbar from './components/Navbar';





function App() {

  const myWidth = 200
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
