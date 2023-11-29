import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './composant/layout';
import HomePage from './pages/homepage';
import Portfolio from './pages/portfolio';
import Apropos from './pages/apropos';
import Avis from './pages/avis';
import Contact from './pages/contact';

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>}/>
          <Route path="/apropos" element={<Layout><Apropos /></Layout>}></Route>
          <Route path='/avis' element={<Layout><Avis /></Layout>}></Route>
          <Route path='/contact' element={<Layout><Contact /></Layout>}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default AppRouter;