import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fasih </span>
            <br /> I am a Fresh Graduate looking to start my career in the field of Web Development.
            I am a self-taught Full Stack Web Developer, currently trying to get professional
            experience.
            <br />
            Additionally, I am currently working as a freelancer and have worked on a few projects.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
