import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Uslugi from './pages/Uslugi';
import Kontakt from './pages/Kontakt';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
