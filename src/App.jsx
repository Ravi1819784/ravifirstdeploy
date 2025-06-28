import React, { useRef } from 'react';
import "./App.css"
import Contact from './Pages/Contact';
import Achievements from './Pages/Achievements';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Home from './Pages/HOme';
import Footer from './Components/Footer';
import Header from './Components/Header';


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
