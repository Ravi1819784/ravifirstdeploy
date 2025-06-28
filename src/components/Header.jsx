import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const Header = ({ scrollToSection, refs }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <ul className={`nav-links ${open ? "open" : ""}`}>

          <li onClick={() => scrollToSection(refs.homeRef)} >Home</li>
          <li onClick={() => scrollToSection(refs.aboutRef)}>About</li>
          <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(refs.experienceRef)}>
            Experience
          </li>
          <li onClick={() => scrollToSection(refs.educationRef)}>Education</li>
          <li onClick={() => scrollToSection(refs.achievementsRef)}>
            Achievements
          </li>
          <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>

          {/*  */}
        </ul>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {" "}
          {open ? (
            <span>
                <RxCross1 className="cross" />
            </span>
          ) : (
            <span>
                <TfiMenu className="menu-bar" />
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
