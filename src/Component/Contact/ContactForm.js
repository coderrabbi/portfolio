/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Swal from "sweetalert2";

import TextField from "@mui/material/TextField";
import "./ContactForm.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    messege: "",
    Logo: "",
    WebDesign: "",
    WebDevelopment: "",
    Other: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      email,
      number,
      messege,
      Logo,
      WebDesign,
      WebDevelopment,
      Other,
    } = user;
    if (
      fname &&
      lname &&
      email &&
      number &&
      messege
      // Logo &&
      // WebDesign &&
      // WebDevelopment &&
      // Other
    ) {
      const res = await fetch(
        "https://portfolio-contact-787-default-rtdb.firebaseio.com/userDara.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            number,
            messege,
            Logo,
            WebDesign,
            WebDevelopment,
            Other,
          }),
        }
      );

      if (res) {
        setUser({
          fname: "",
          lname: "",
          email: "",
          number: "",
          messege: "",
          Logo: "",
          WebDesign: "",
          WebDevelopment: "",
          Other: "",
        });
        Swal.fire({
          icon: "success",
          title: "Submitted Successfully",
          text: "",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Fill The Feild",
        text: "",
      });
    }
  };

  return (
    <div className="contact__form">
      <div className="contact__form__container">
        <form action="" method="POST">
          <div className="contact__name">
            <TextField
              id="filled-basic"
              label="First Name"
              variant="filled"
              color="warning"
              type="text"
              name="fname"
              value={user.fname}
              onChange={getUserData}
              autoComplete="off"
              required
            />

            <TextField
              id="filled-basic"
              label="last name"
              variant="filled"
              color="warning"
              type="text"
              name="lname"
              value={user.lname}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="email__phone">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              color="warning"
              type="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              autoComplete="off"
              required
            />

            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              color="warning"
              name="number"
              value={user.number}
              onChange={getUserData}
              autoComplete="off"
              required
            />
          </div>
          <div className="what__you__want">
            <p>What the of website do you need?</p>
            <div className="contat__checkbox">
              <input
                type="checkbox"
                onClick={getUserData}
                name="Web Design"
                value={user.WebDesign}
              />
              <label htmlFor="checkbox">Web Design</label>

              <input
                type="checkbox"
                onClick={getUserData}
                name="Web Development"
                value={user.WebDevelopment}
              />
              <label htmlFor="checkbox">Web Development</label>

              <input
                type="checkbox"
                onClick={getUserData}
                name="Logo"
                value={user.Logo}
              />
              <label htmlFor="checkbox">Logo</label>

              <input
                type="checkbox"
                onClick={getUserData}
                name="Other"
                value={user.Other}
              />
              <label htmlFor="checkbox">Other</label>
            </div>
          </div>
          <div className="contact__textarea">
            <TextField
              id="filled-basic"
              label="Write Your Messege"
              variant="filled"
              color="warning"
              name="messege"
              value={user.messege}
              onChange={getUserData}
              multiline
              rows={4}
            />
          </div>

          <div className="contact__submit__button">
            <a href="">
              <button onClick={submitData}>Sent Messege</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
