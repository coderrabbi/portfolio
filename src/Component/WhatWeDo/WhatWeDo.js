import React from "react";
import Flip from "react-reveal/Flip";
import {
  CardActionArea,
  CardContent,
  Card,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import "./WhatWeDo.css";

const work = [
  {
    img: require("../../assets/images/webdesign.png"),
    cardTitle: "Web Design",
    cardDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    backgroundColor: "#1fb6ea",
  },
  {
    img: require("../../assets/images/webdev.png"),
    cardTitle: "Web Development",
    cardDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    backgroundColor: "#3644af",
  },
  {
    img: require("../../assets/images/seo.png"),
    cardTitle: "SEO",
    cardDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    backgroundColor: "#2a3443",
  },
];
const WhatWeDo = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {work.map((crd) => {
        return (
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4}>
              {" "}
              <Flip left>
                <Card
                  sx={{ maxWidth: 345 }}
                  className="cardContainer"
                  style={{ backgroundColor: "#282a36", color: "#fff" }}
                >
                  <CardActionArea>
                    <div className="cardImage">
                      <img src={crd.img} alt="" />
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ textAlign: "center" }}
                      >
                        {crd.cardTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        {crd.cardDiscription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Flip>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default WhatWeDo;
