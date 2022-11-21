import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
