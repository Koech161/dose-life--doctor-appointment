import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Notfound from './components/Notfound';
import Doctors from './components/Doctors';
import { Doctordetails } from './components/Doctordetails';
import Footer from './components/Footer';
import { Login } from './components/Login';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<Doctordetails />} />
        <Route path='/login' element= {<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
     </Router>
    
    </div>
  );
}

export default App;
