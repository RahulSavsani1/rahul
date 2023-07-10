import './App.css';
import { Routes, Route } from "react-router-dom";
import {About} from "./pages/About.jsx";
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import TechnicalSkills from './pages/TechnicalSkills.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footers.jsx';

function App() {
  const AppRoutes = () => {
    return(<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
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