import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function ProductDescription() {
  return (
    <Typography >
      <Box
        sx={{
          position: "absolute",
          width: "704px",
          height: "148px",
          left: "143px",
          top: "243px",
          fontStyle: "normal",
          lineHeight: "92%",
          letterSpacing: "-0.06em",
          color: "white",
          fontFamily: "Market Deco",
          fontWeight: "400",
          fontSize: "80px",
        }}
      >
        BHAKTA 50 Barrel 23: “Morgan”
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "704px",
          height: "313px",
          left: "143px",
          top: "423px",
          fontFamily: "Libre Franklin",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "140%",
          letterSpacing: "0.04em",
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            lineHeight: "140%",
            letterSpacing: "0.04em",
          }}
        >
          Rare. Ancient.Exquisite.
        </Typography>
        <br />
        BHAKTA 50 is the oldest and most uniquely collectible spirit on Earth.
        <br />
        <br />
        Only 38 barrels ever made—each a distinct blend of eight Armagnac
        vintages spanning 1868–1970, selected from our world-class single
        vintage library. Introducing our Collection’s latest release: Barrel 23
        “Morgan.”
        <br />
        <br />
        Only 60 bottles will ever be released for sale online.
        <br /> Available for one week only.
      </Box>
      
      <Button
        sx={{
          "&:hover": {
            color: "#000",
            backgroundColor: "#fff",
            borderColor: "#fff",
          },
          position: "absolute",
          left: "143px",
          right: "71.25%",
          top: "88.42%",
          bottom: "86.16%",
          fontFamily: "Libre Franklin",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "20px",
          height: "57.5px",
          width: '325px',
          border: '3.5px solid #FFFFFF',
          borderRadius: 0,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
        variant="outlined"
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            letterSpacing: "0.02em",
          }}
        >
          $450 | BUY BARREL 23
        </Typography>
        
      </Button>
    </Typography>
  );
}
