import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navabar from './components/Navabar';


const App = () => {
  return (
    <div className='bg-zinc-900' >
      <Navabar/>
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App