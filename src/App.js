import React from 'react';
import About from './Components/About/about';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/hero';
import Projects from './Components/Projects/projects';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
