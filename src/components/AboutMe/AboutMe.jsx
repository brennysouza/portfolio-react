import React from "react";
import "./AboutMe.css";
import headshot from "../../assets/headshot.png";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="hero-content">
      <h1>About Me</h1>
      <img src={headshot} alt="Headshot of Brenny"/>
      </div>

      <p>
      Hello, world. &#x270C; 
      <br/>
      Welcome to my 'developer' portfolio. I'm Brenny, an aspiring full-stack software developer, and a proud graduate of the UCONN School of Engineering Coding Bootcamp. I'm a creative problem-solver, eager to help clients enhance their businesses and brands by developing cutting-edge software. With proficiency in the MERN stack, I have accumalated a vast array of language and technology proficienies in order to create multiple full-stack applications for both front end and back end. I'm a quick learner dedicated to continuous skill improvement and passionate about learning and creating.
      </p>
    </div>
  );
}

export default AboutMe;