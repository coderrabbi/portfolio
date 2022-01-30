import React, { useRef } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import "./Form.css";
import useForm from "./useForm";
import Input from "./Controls/Input";
import SubmitButton from "./SubmitButton";
import SendIcon from "@mui/icons-material/Send";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import emailjs from "emailjs-com";

const initialFValues = {
  id: 0,
  fname: "",
  lname: "",
  email: "",
  phone: "",
  message: "",
  isPermanent: false,
};

const ContactForm = () => {
  const form = useRef();

  const {
    values,
    // setValues,
    errors,
    setErrors,
    handleInputChange,
    handleReset,
  } = useForm(initialFValues);

  const validate = () => {
    let temp = {};
    temp.fname = values.fname ? "" : "This field is required.";
    temp.lname = values.lname ? "" : "This field is required.";
    temp.email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
        ? ""
        : "Please enter a valid email address.";
    temp.message = values.message ? "" : "This field is required.";
    temp.phone = values.phone ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_cpinffa",
          "template_09ub39w",
          form.current,
          "user_deyQfIM8xiaoCzsJApXP2"
        )
        .then((res) => {
          console.alert("message send sucessfull");
        })
        .catch((err) => {
          console.log(err);
        });
      handleReset();
    }
  };

  return (
    <div className="form__container">
      <Card className="form__card">
        <CardContent>
          <form ref={form} children onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <Input
                  name="fname"
                  label="First Name"
                  value={values.fname}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                  required
                  error={errors.fname}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Input
                  label="Last Name"
                  name="lname"
                  variant="standard"
                  onChange={handleInputChange}
                  value={values.lname}
                  error={errors.lname}
                />
              </Grid>
              <Grid xs={12} item>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  variant="standard"
                  onChange={handleInputChange}
                  value={values.email}
                  error={errors.email}
                />
              </Grid>
              <Grid xs={12} item>
                <Input
                  type="number"
                  label="Phone"
                  name="phone"
                  variant="standard"
                  onChange={handleInputChange}
                  value={values.phone}
                  error={errors.phone}
                />
              </Grid>
              <Grid xs={12} item>
                <Input
                  label="Message"
                  name="message"
                  multiline="true"
                  rows={4}
                  placeholder="Type your message here"
                  variant="standard"
                  onChange={handleInputChange}
                  value={values.message}
                  error={errors.message}
                />
              </Grid>
              <Grid xs={12} item>
                <div className="formBtn">
                  <SubmitButton
                    type="submit"
                    color="primary"
                    text="Submit"
                    className="submitBtn"
                    icon={
                      <SendIcon
                        className="send__icon"
                        style={{ color: "#ffc300" }}
                      />
                    }
                  ></SubmitButton>
                  <SubmitButton
                    type="reset"
                    text="Reset"
                    className="resetBtn submitBtn"
                    icon={
                      <AutorenewIcon
                        className="reset__icon "
                        style={{ color: "#ffc300" }}
                      />
                    }
                    onClick={handleReset}
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
