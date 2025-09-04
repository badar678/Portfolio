import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import mernImg from "../../Assets/mern.png"; 

function MernStack() {
  return (
    <Container fluid className="mern-section">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-headers">
            <h1 style={{ paddingBottom: 10 }} className="heading">
               <strong className="purple">MERN STACK</strong> Services
            </h1>
            <p className="home-about-body">
              I offer professional <b className="purple">MERN Stack</b> development services, including building robust web applications using <b className="purple">MongoDB, Express.js, React.js,</b> and <b className="purple">Node.js</b>.
              <br />
              <br />
              My expertise covers:
              <ul>
                <li>Custom Web Application Development</li>
                <li>API Integration & Development</li>
                <li>Responsive UI/UX Design</li>
                <li>Deployment & Maintenance</li>
              </ul>
              <br />
              Let's build something amazing together!
            </p>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={mernImg}
              alt="MERN Stack"
              className="img-fluid"
              style={{ maxHeight: "350px", marginTop: "50px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MernStack;