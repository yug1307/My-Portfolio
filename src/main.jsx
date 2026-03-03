import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/contact" element={<ContactMe/>} /> 
    </Routes>
  </BrowserRouter>
)
