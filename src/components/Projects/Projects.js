import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import projectmanagement from "../../Assets/Projects/project-management.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Full Stack E-Commerce Website"
              description="A complete MERN stack e-commerce platform with product listings, shopping cart, user authentication, admin dashboard, and order management system. Built using React.js, Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/badar678/Full-Stack-E-Commerce-Website"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectmanagement}
              isBlog={false}
              title="Project Management System"
              description="A full-stack MERN project management platform with role-based dashboards for CEO, Project Managers, Employees, and Clients. Features include project request & approval workflow, task assignments, progress tracking, and real-time reporting with charts."
              ghLink="https://github.com/badar678/Project-Management-System"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A modern and responsive personal portfolio website built with React.js to showcase my projects, skills, resume, and GitHub activity. Designed with a clean UI, smooth navigation, and mobile-friendly layout."
              ghLink="https://github.com/badar678/Portfolio"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
