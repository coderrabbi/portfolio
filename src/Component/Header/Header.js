import { bubble as Menu } from "react-burger-menu";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

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
    item: "Contact Us",
    to: "/contact",
  },
];

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <Menu>
          {navitems.map((nav) => {
            return (
              <li className="nav-item">
                <NavLink
                  exact
                  to={nav.to}
                  activeClassName="active"
                  className="nav-links"
                >
                  {nav.item}
                </NavLink>
              </li>
            );
          })}
        </Menu>
      </div>
    );
  }
}
export default Header;
