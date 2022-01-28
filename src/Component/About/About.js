import React from "react";
import "./About.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Repeat from "../Repeat/Repeat";
import { Link } from "react-router-dom";
const infoList = [
  "Full Stack web and mobile development",
  "Interactive Front End as per the design",
  "React and React Native",
  "Redux for State Mnanagement",
  "Building REST API",
  "Managing database",
];
const About = (props) => {
  return (
    <div id="About">
      <Container>
        <Row>
          <Col lg={12}>
            <Repeat title={"About Me"} subHeading={"Why Choose Me?"}></Repeat>
            <div className="about-card-container">
              <div className="about-card">
                <div className="about-profile">
                  <div className="about-profile-pic"></div>
                </div>
                <div className="about-details">
                  <div className="about-info">
                    <span className="about-description">
                      Full stack web and mobile developer with background
                      knowledge of MERN stacks with redux, along with a knack of
                      building applications with utmost efficiency. Strong
                      professional with a BSC willing to be an asset for an
                      organization.
                    </span>
                  </div>
                  <div className="about-highlight">
                    <h3>Here are a Few Highlights:</h3>
                  </div>
                  <div className="about-info-list">
                    {infoList.map((list) => {
                      return (
                        <div className="info-list">
                          <span></span>
                          <p>{list}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="about-btn">
                    <Link to="#">
                      <Button className="about-hire-btn">Hire Me</Button>
                    </Link>
                    <Link to="#">
                      <Button className="about-resume-btn">Get Resume</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
