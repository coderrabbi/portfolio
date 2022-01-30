import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Paralax = () => {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={1} speed={2} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <WhatWeDo />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Paralax;
