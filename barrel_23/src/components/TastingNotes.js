import { Box } from "@mui/system";
import React from "react";
import Finish from "./image/Finish.png";
import Aspect from "./image/Aspect.png";
import Nose from "./image/Nose.png";
import Palate from "./image/Palate.png";
import { Typography } from "@mui/material";

export default function TastingNotes() {
  const styles1 = {
    display: "flex",
    justifyContent: "space-around",
    alignItem: "center",
    position: "absolute",
    width: "100%",
    height: "43px",
    color: "white",
    top: "2700px",
  };
  const styles2 = {
    textAlign: "center",
    width: "100%",
    height: "43px",
    color: "white",
    top: "2700px",
  };
  const styles3 = {
    fontFamily: "Market Deco",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "90%",
    letterSpacing: "-0.06em",
    color: "#FFFFFF",
  };
  const styles4 = {
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "29px",
    letterSpacing: "-0.06em",
    color: "#FFFFFF",
    textAlign: "center",
  };

  return (
    <Box style={styles1}>
      <Box>
        <img src={Aspect} alt="Aspect" />
        <Typography style={styles2}>
          <Box style={styles3}>Deep Amber</Box><br/>
          <Box style={styles4}>Aspect</Box>
        </Typography>
      </Box>

      <Box>
        <img src={Nose} alt="Nose" />
        <Typography style={styles2}>
          <Box style={styles3}>
            Nutty-praline notes
            <br /> of a patisserie
          </Box><br/>
          <Box style={styles4}>Nose</Box>
        </Typography>
      </Box>

      <Box>
        <img src={Palate} alt="Palate" />
        <Typography style={styles2}>
          <Box style={styles3}>
            Orange & salted <br />
            caramel
          </Box><br/>
          <Box style={styles4}>Palate</Box>
        </Typography>
      </Box>

      <Box>
        <img width={154} height={155} src={Finish} alt="Finish" />
        <Typography style={styles2}>
          <Box style={styles3}>
            Tannins & smooth <br />
            mineral notes
          </Box><br/>
          <Box style={styles4}>Finish</Box>
        </Typography>
      </Box>
    </Box>
  );
}
