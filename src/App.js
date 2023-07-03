import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import TechnicalSkills from './pages/TechnicalSkills';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footers';

function App() {
  const AppRoutes = () => {
    return(<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/technicalskills" element={<TechnicalSkills />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    );
  };

  return(
    <div className='App'>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}
export default App;