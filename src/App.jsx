import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const App = () => (
  <div>
    <Header />
    <main>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
  </div>
);

export default App;
