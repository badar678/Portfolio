import React from "react";  
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import wordpressImg from "../../Assets/wordpress.png"; 

function WordPressServices() {
  return (
    <Container fluid className="wordpress-section">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-headers">
            <h1 style={{ paddingBottom: 10 }} className="heading">
              <strong className="purple">WordPress</strong> Services
            </h1>
            <p className="home-about-body">
              I offer professional <b className="purple">WordPress</b> development services, including creating modern, responsive, and scalable websites using <b className="purple">WordPress CMS</b>.
              <br />
              <br />
              My expertise covers:
              <ul>
                <li>Custom WordPress Website Development</li>
                <li>Theme Customization</li>
                <li>Plugin Development & Integration</li>
                <li>E-commerce Solutions (WooCommerce)</li>
                <li>Website Optimization & Maintenance</li>
              </ul>
              <br />
              Let's build a powerful WordPress site tailored to your needs!
            </p>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={wordpressImg}
              alt="WordPress"
              className="img-fluid"
              style={{ maxHeight: "350px", marginTop: "50px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WordPressServices;
