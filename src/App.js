import React from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import BackgroundImagePage from './pages/BackgroundImagePage';
import HowToShowTableContentPage from './pages/HowToShowTableContentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pagewithbackgroundimage" element={<BackgroundImagePage />} />
          <Route path="/howtoshowtable" element={<HowToShowTableContentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
