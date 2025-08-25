import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
       <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Badar ul Islam </span>
    from <span className="purple"> Rawalpindi, Pakistan.</span>
    <br />
    I am currently a <span className="purple">3rd semester</span> student pursuing 
    BSCS with a <span className="purple">3.21 CGPA</span>.
    <br />
    <br />
    I have a growing passion for web development and my skills include working 
    with the <span className="purple">MERN Stack</span>.
    <br />
    <br />
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Playing Football
    </li>
    <li className="about-activity">
      <ImPointRight /> Editing Videos
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"{" "}
  </p>
  <footer className="blockquote-footer">Badar ul Islam</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
