import React from "react";
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
          /* or 28px */
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
      <Box>
      </Box>
    </Typography>
  );
}
