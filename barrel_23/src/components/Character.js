import React from "react";
import image1 from "./image/char.png";
import image2 from "./image/image2.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Character() {
  
  return (
    <Typography>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          width: "289px",
          height: "86px",
          left: "267px",
          top: "1109.53px",
          fontFamily: "Market Deco",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "90%",
          /* or 43px */
          letterSpacing: "-0.06em",
          color: "#FFFFFF",
        }}
      >
        The Bhakta 50 Collection
        <br />
        <br />
      </Typography>

      <Box
        style={{
          position: "absolute",
          width: "438px",
          height: "280px",
          left: "267px",
          top: "1227.53px",
          fontFamily: "Libre Franklin",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "140%",
          letterSpacing: "0.04em",
          color: "#FFFFFF",
        }}
      >
        Fifty Years at its youngest—and more than one hundred fifty at its
        oldest—BHAKTA 50 is our flagship bottling. Carrying an astounding age
        statement nearly unimaginable in a market where 12 and 13 Year whiskies
        are considered “old,” only 38 barrels of BHAKTA 50 have ever been
        produced. Each expression is a blend of 8 Armagnac vintages spanning
        from 1868–1970, finished in Scotch Whisky casks.
      </Box>
      <Box></Box>
      <img
        src={image1}
        alt="Collection"
        style={{
          position: "absolute",
          width: "388.95px",
          height: "388.95px",
          left: "665.02px",
          top: "1149.76px",
          zIndex: "1",
        }}
      />
      <img
        src={image1}
        alt="Collection"
        style={{
          position: "absolute",
          width: "388.95px",
          height: "388.95px",
          left: "765.02px",
          top: "1169.76px",
          zIndex: "2",
        }}
      />
      <img
        src={image1}
        alt="Collection"
        style={{
          position: "absolute",
          width: "388.95px",
          height: "388.95px",
          left: "865.02px",
          top: "1149.76px",
          zIndex: "1",
        }}
      />
      <br />
      <br />
      <img
        src={image2}
        alt="Collection"
        style={{
          position: "absolute",
          width: "440px",
          height: "592px",
          left: "194px",
          top: "1669px",
        }}
      />
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          width: "457px",
          height: "86px",
          left: "735px",
          top: "1669px",
          fontFamily: "Market Deco",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "90%",
          letterSpacing: "-0.06em",
          color: "#FFFFFF",
        }}
      >
        The Bhakta 50 Collection
        <br />
        <br />
      </Typography>
      <Box
        style={{
          position: "absolute",
          width: "493px",
          height: "285px",
          left: "735px",
          top: "1854px",
          fontFamily: "Libre Franklin",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "140%",
          letterSpacing: "0.04em",
          color: "#FFFFFF",
        }}
      >
        J.P. Morgan Like the innovative banking titan for which it is named,
        Barrel 23: “Morgan” sets a new “gold standard” for exquisite,
        investment-grade spirits. Crafted from eight different Armagnac
        vintages—including 1893, the year J.P. Morgan rescued the U.S. Treasury
        from collapse—with BHAKTA 50 “Morgan” we honor the titans and tycoons
        who forged the modern world.
      </Box>
      <Box></Box>
    </Typography>
  );
}
