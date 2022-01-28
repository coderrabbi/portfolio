import React from "react";
import "./Hero.css";
import Typical from "react-typical";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import shape from "../../assets/hero/images.svg";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const anchorLink = [
    {
      href: "#",
      cName: "fab fa-facebook",
    },
    {
      href: "#",
      cName: "fab fa-twitter",
    },
    {
      href: "#",
      cName: "fab fa-instagram",
    },
    {
      href: "#",
      cName: "fab fa-github",
    },
    {
      href: "#",
      cName: "fab fa-youtube",
    },
  ];
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="personalContect">
              <Fade left>
                <div className="personalText">
                  <div className="personalSocial">
                    {anchorLink.map((anchorLink) => (
                      <a href={anchorLink.href}>
                        <i className={anchorLink.cName}></i>
                      </a>
                    ))}
                  </div>
                  <div className="personalName">
                    <span>
                      Hello, I'M <span class="highlightTxt">Golam Rabbi</span>
                    </span>
                  </div>
                  <div className="herotype">
                    <h1>
                      <Typical
                        loop={Infinity}
                        steps={[
                          "Iam a React Developer ",
                          1000,
                          "Iam a Full stack Web Developer",
                          1000,
                          "Iam a Programmer",
                          1000,
                          "Iam a Content creator",
                          1000,
                          "Iam a Kotlin Developer",
                          1000,
                          "Iam a App Developer",
                          1000,
                        ]}
                      />
                    </h1>
                  </div>
                  <p className="short">
                    Knack of building applications with front and back end
                    operations.
                  </p>
                  <div className="profileBtn">
                    <Link to="#">
                      <Button className="hireBtn">Hire Me</Button>
                    </Link>
                    <Link to="#">
                      <Button className="resumeBtn">Get Resume</Button>
                    </Link>
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div className="profile">
                  <div className="profile-oic">
                    <div className="profilePicture"></div>
                  </div>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape">
        <img src={shape} alt="" />
      </div>
      <WhatWeDo />
    </div>
  );
};

export default Hero;
