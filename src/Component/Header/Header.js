import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import {Container,Col,Row} from 'react-bootstrap'
const Header = () => {
    return (
        
        <div className="header-container">
           <Container>
               <Row>
                   <Col xl={12}>
                   <div className="header-row">
                
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="headerMenu">
                    <li><a href="home" id='home'>Home</a></li>
                    <li><a href="#About">AboutMe</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/testimonial">Testimonial</a></li>
                    <li><a href="/contactMe">ContactMe</a></li>
                </div>
                </div>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Header;