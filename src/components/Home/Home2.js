import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/badarAvatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
         <p className="home-about-body">
  I fell in love with programming and I keep learning and improving
  every day. 🤞
  <br />
  <br />I am a 
  <i>
    <b className="purple"> Front-End Developer </b>
  </i>
  <br />
  <br />
  I am also continuously expanding my skills in the 
  <i>
    <b className="purple">MERN Stack (MongoDB, Express.js, React.js, Node.js)</b>
  </i>
  <br />
  <br />
  My field of interest is building modern&nbsp;
  <i>
    <b className="purple">Web Applications and Products </b> and also creating 
    <b className="purple"> WordPress Websites. </b>
  </i>
  <br />
  <br />
  Whenever possible, I apply my passion for developing products with{" "}
  <b className="purple">Node.js</b> and
  <i>
    <b className="purple">
      {" "}Modern Javascript Libraries and Frameworks
    </b>
  </i>
  &nbsp; like
  <i>
    <b className="purple"> React.js</b>
  </i>
</p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg}
                className="img-fluid"
                alt="Badar avatar"
                loading="lazy"
                decoding="async"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/badar678"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Badar on GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Badar on Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Badar on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/badar_619_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Badar on Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
