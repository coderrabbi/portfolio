import React from "react";
import notFound from "../../assets/404page/notfound.svg";
import "./Notfound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="notFound-container">
        <img src={notFound} alt="" />
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="text-center">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </>
  );
};

export default Notfound;
