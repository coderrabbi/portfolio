import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Repeat from "../Repeat/Repeat";
import beforeImg from "../../assets/images/before-image.png";
import afterImg from "../../assets/images/after-image.png";

const Compare = () => {
  return (
    <div>
      <Repeat title={"YOU JUST IMAGINE IT I'LL MAKE IT"}></Repeat>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeImg}
            srcSet={beforeImg}
            alt="Image one"
            style={{ backgroundSize: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterImg}
            srcSet={afterImg}
            alt="Image two"
            style={{ backgroundSize: "cover" }}
          />
        }
        style={{
          height: "500px",
          width: "90%",
          margin: "0 auto",
          backgroundSize: "cover",
          objectFit: "fill",
        }}
      />
    </div>
  );
};

export default Compare;
