import React from "react";
import { ReactComponent as NotFound } from "../../assets/404page/notfound.svg";
import "./Notfound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="notFound-container">
        <NotFound className="notFound" />
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
