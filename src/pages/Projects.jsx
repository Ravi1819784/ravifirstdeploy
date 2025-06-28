import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>E-commerce Website: </strong>{" "}
          <p>
            An e-commerce project built with React involves creating an online
            platform where users can browse, select, and purchase products. It
            typically includes components for product display, shopping cart
            management, user authentication, and order processing. State
            management is handled using tools like Context API. Key features
            include user authentication, a shopping cart, and a checkout
            process. Performance optimization techniques such as lazy loading
            and code splitting are implemented to ensure a smooth user
            experience. Testing and debugging are crucial steps to ensure the
            application functions correctly.
          </p>
        </li>
        <li>
          <strong>Todo App: </strong>
          <p>
            A to-do app built with React allows users to manage tasks
            efficiently. It typically includes features to add, delete, and mark
            tasks as complete. The app's state, managed using React hooks like
            useState, stores the list of tasks. User interactions, such as
            adding a new task or toggling completion status, trigger state
            updates, re-rendering the component and reflecting the changes in
            the UI.
          </p>
        </li>

        <li>
          <strong>Patient Management System: </strong>{" "}
          <p>
            A React-based Patient Management System provides a user-friendly
            interface for managing patient information, appointments, and
            medical records. Key features include patient registration, a
            searchable patient list, doctor availability, appointment booking,
            and medical history access. This system aims to streamline
            healthcare operations and improve patient access to information
          </p>
        </li>
        <div className="age-video">      <li>
          <strong>Age Calculator: </strong>
          <div className="age-video-text"> <video controls>
                  <source src="/videos/agecalculator.mp4" type="video/mp4" />
                </video>
          <p>
            The Age Calculator using JavaScript is a simple web application that
            allows users to calculate their age based on their date of birth.
            This project is a great way to learn and practice basic JavaScript
            programming while creating a useful tool for calculating ages.
          </p></div>
   
        </li></div>
  
        <li>
          <strong>Calculator: </strong>

              <div className="age-video-text"> <video controls>
                  <source src="/videos/cravicalculator.mp4" type="video/mp4" />
                </video>
          <p>
            A JavaScript calculator is a web-based application that allows users
            to perform arithmetic operations directly within a web browser. It
            uses HTML for the structure, CSS for styling, and JavaScript for
            functionality
          </p> </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
