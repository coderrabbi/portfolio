import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./Cursur.css";

const Cursur = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={10}
        className="cursor"
      />
    </div>
  );
};

export default Cursur;
