import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
