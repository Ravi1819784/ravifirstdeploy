import React, { useRef } from 'react';
import "./App.css"
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/HOme';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const projectsRef=useRef(null);
  const skillsRef=useRef(null);
  const experienceRef=useRef(null);
  const educationRef=useRef(null);
  const achievementsRef=useRef(null);
  const contactRef=useRef(null);

  const scrollToSection=(ref)=>{
ref.current.scrollIntoView({behavior:"smooth"});
  };


  return (

        <div id="root">
    <Header scrollToSection={scrollToSection} refs={{homeRef,aboutRef,skillsRef,projectsRef,contactRef,experienceRef,educationRef,achievementsRef}}/>
                <div className="main-content">

<div ref={homeRef}><Home/></div>
<div ref={aboutRef}><About/></div>
<div ref={projectsRef}><Projects/></div>
<div ref={skillsRef}><Skills/></div>
<div ref={experienceRef}><Experience/></div>
<div ref={educationRef}><Education/></div>
<div ref={achievementsRef}><Achievements/></div>
<div ref={contactRef}><Contact/></div>



{/*  */}


      </div>
      <Footer />
          </div>

  );
}

export default App;
