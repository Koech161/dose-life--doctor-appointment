import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Notfound from './components/Notfound';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
     </Router>
    
    </div>
  );
}

export default App;
