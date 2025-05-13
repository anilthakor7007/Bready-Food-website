
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about'  element={<AboutUsPage/>}/>
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;