import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import one from "../../Assets/Projects/1.png";
import two from "../../Assets/Projects/2.png";
import three from "../../Assets/Projects/3.png";
import four from "../../Assets/Projects/4.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="BAYC"
              description="One of my initial projects, this work focused solely on frontend development, enhancing my proficiency with CSS and HTML."
              ghLink="https://github.com/Fasih123456/jiermyu-freelancing-work.git"
              demoLink="https://precious-lokum-b76104.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={two}
              isBlog={false}
              title="Taxi Service Website"
              description="For a recent small business project, I designed a website with both frontend and backend capabilities using React.js and Node.js. In collaboration with a senior developer, I learned hosting APIs on Azure. Additionally, my integration of Tailwind CSS not only enhanced the project but also significantly bolstered my frontend skills. This project gained significant traction after hosting and has already served multiple clients."
              ghLink="https://github.com/Fasih123456/taxi-company-website.git"
              demoLink="http://emmsminibus.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={three}
              isBlog={false}
              title="Construction Company Website"
              description="For a prominent company, I undertook a project focused primarily on a simple frontend without a backend. This experience significantly sharpened my communication and interpersonal skills due to regular engagements with executives and senior staff. All image placement and design is based on client request"
              ghLink="https://enchanting-profiterole-beb892.netlify.app/"
              demoLink="https://enchanting-profiterole-beb892.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={four}
              isBlog={false}
              title="WordPress site"
              description="Curious about the hype surrounding no-code builders, I took on a small contract. This experience deepened my comprehension of no-code platforms and their distinct hosting procedures, which differ from traditional self-made websites."
              demoLink="https://engineeredplans.ca/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
