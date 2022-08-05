import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";
import { Container, Row, Col } from "react-bootstrap";
const navitems = [
  {
    item: "Home",
    to: "/",
  },
  {
    item: "About",
    to: "/about",
  },
  {
    item: "Resume",
    to: "/resume",
  },
  {
    item: "Blog",
    to: "/blog",
  },
  {
    item: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className="nav__main">
      <Container>
        <Row>
          <Col md={12}>
            <div
              className={click ? "main__container" : ""}
              onClick={() => Close()}
            />
            <div className="nav__bar" onClick={(e) => e.stopPropagation()}>
              <div className="nav__container">
                <div className="nav__logo">
                  <NavLink exact to="/">
                    <img src={logo} alt="" />
                  </NavLink>
                </div>

                <div className="navlink__container">
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {navitems.map((nav) => {
                      return (
                        <li className="nav-item">
                          <NavLink
                            exact
                            to={nav.to}
                            activeClassName="active"
                            className="nav-links"
                            onClick={click ? handleClick : null}
                          >
                            {nav.item}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="nav-icon" onClick={handleClick}>
                  <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
