import React from 'react';
import './index.css';  // Global styles
import './App.css';    // Specific styles for App components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </div>
);

export default App;
