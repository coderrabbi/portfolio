import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import '../Home/Home.css';
import ContactForm from './ContactForm';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
    return (
        <div className="contact__page__body">
            <Container>
                <Row>
                    <div className="page__header text-center">
                        <h2><span className="colored__text">C</span>ontact <span className="colored__text">M</span>e</h2>
                    </div>
                    <Col xs={12} md={8} lg={8}>
                        <div className="form__section">
                            <ContactForm/>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className="contact__info">
                            <div className="card__icon">
                                <a href="mailto:developernayeem65@gmail.com"><MailOutlineIcon className="contact__icon mail__icon"/>
                                </a>
                            </div>
                            <div className="card__info">
                                <h2>Mail</h2>
                                <h5>developernayeem65@gmail.com</h5>
                            </div>
                        </div>
                        
                        <div className="contact__info phone">
                            <div className="card__icon">
                                <a href="tel:+8801775225448"><LocalPhoneIcon className="contact__icon phone__icon"/>
                                </a>
                            </div>
                            <div className="card__info">
                                <h2>Phone</h2>
                                <h5>+880-1775225448</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <Container>
                <div className="market__info">
                    <div className="market__heading text-center text-light">
                    <h2>Find me on marketplace</h2> 
                     </div>
                </div>
                <Row>
                    <Col xs={12} md={6} lg={3}><div className="hire__btn">
                            <button className="glow-on-hover" type="button">Fiverr</button>
                            </div></Col>
                    <Col xs={12} md={6} lg={3}><div className="hire__btn">
                            <button className="glow-on-hover" type="button">Fiverr</button>
                            </div></Col>
                    <Col xs={12} md={6} lg={3}><div className="hire__btn">
                            <button className="glow-on-hover" type="button">Fiverr</button>
                            </div></Col>
                    <Col xs={12} md={6} lg={3}><div className="hire__btn">
                            <button className="glow-on-hover" type="button">Fiverr</button>
                            </div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;