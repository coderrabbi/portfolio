import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Repeat from "../Repeat/Repeat";
import "./Contact.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <Container className="contact__container">
        <Row>
          <Col md={12} lg={12}>
            <div className="contact__header">
              <Repeat
                title={"Contact Us"}
                subHeading={"Any question or remarks? Just write us a message!"}
              />
            </div>
            <div className="contact__body">
              <Row>
                <Col md={5}>
                  <ContactDetails />
                </Col>
                <Col md={7}>
                  <ContactForm />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
