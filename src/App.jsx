import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => (
  <div>
    <Header />
    <main>
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </div>
);

export default App;
