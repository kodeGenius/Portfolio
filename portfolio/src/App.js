import React from 'react';
import Head from './Components/Head/head';
import About from './Components/About/about.js';
import Skills from './Components/Skills/skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="bar">
        <a>About</a>
        <a>Skills</a>
        <a href="Projects">Projects</a>
      </div>
      <Head />
      <About />
      <Skills />
      
    </div>
  );
}

export default App;
