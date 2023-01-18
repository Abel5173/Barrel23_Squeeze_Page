import { Box } from "@mui/system";
import background from "./image/j.jpg";
import React from "react";
import { Button, Typography } from "@mui/material";

export default function ProductDescription() {
  const style2 = {
    background:
      "radial-gradient(65.67% 49.17% at 57.95% 50%, rgba(0, 0, 0, 0) 19.9%, #000000 100%)",
    width: "100%",
    height: "961px",
    position: "absolute",
    zIndex: 99,
  };
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
        sx={{
          position: "absolute",
          width: "100%",
          height: "961px",
          zIndex: 1,
        }}
      ></Box>
      <Box style={style2}>
        <Typography
          sx={{
            position: "absolute",
            width: "704px",
            height: "148px",
            left: "143px",
            top: "243px",
            fontFamily: "Market Deco",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "80px",
            lineHeight: "92%",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          BHAKTA 50 Barrel 23: “Morgan”
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "704px",
            height: "313px",
            left: "143px",
            top: "423px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "140%",
            letterSpacing: "0.04em",
            color: "#FFFFFF",
          }}
        >
          Rare. Ancient. Exquisite. <br />
          <br />
          BHAKTA 50 is the oldest and most uniquely collectible spirit on Earth.{" "}
          <br />
          <br /> Only 38 barrels ever made—each a distinct blend of eight
          Armagnac vintages spanning 1868–1970, selected from our world-class
          single vintage library. Introducing our Collection’s latest release:
          Barrel 23 “Morgan.” Only 60 bottles will ever be released for sale
          online. Available for one week only.
        </Typography>
        <Button
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "300px",
            height: "50px",
            left: "143px",
            top: "868px",
            border: "2.8px solid #FFFFFF",
            borderRadius: "0px"
          }}
        >
          <Box
            sx={{
              fontFamily: "Libre Franklin",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            $450 | BUY BARREL 23
          </Box>
        </Button>
      </Box>
    </>
  );
}
