import './App.css';
import React from 'react';
import Home from './pages/Home';
import ContactUs from './pages/Contact us';
import Form  from './pages/Form';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
         <Route path="contact-us" element={<ContactUs/>}></Route>
         <Route path="Add-Recipe" element={<Form/>}></Route>
      </Routes> 
    </Router>
  );
}

export default App;