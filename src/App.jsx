import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



import Navber from './components/Home/Navber';
import LandingPage from './components/Home/LandingPage';
import Services_section from './components/Servicespage/Services_section';



function App() {

  return (
    <div>
    
      <Router>
        <Navber />
        <Routes>
          <Route path="/" element={<LandingPage />} />
           {/* <Route path="/about" element={<About />} />  */}
           <Route path="/services" element={<Services_section />} />
          {/* <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quote" element={<Quote />} /> */}
        </Routes>
      </Router>

    </div>
  );
}


export default App;
