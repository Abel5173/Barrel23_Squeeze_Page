import { Box } from "@mui/system";
import React from "react";
import Finish from "./image/Finish.png";
import Aspect from "./image/Aspect.png";
import Nose from "./image/Nose.png";
import Palate from "./image/Palate.png";
import { Typography } from "@mui/material";

export default function TastingNotes() {
    const styles1 = {
        display: 'flex',
    }
  return (
    <Box style={styles1}>
      <Box>
        <img src={Aspect} alt="Aspect" />;
        <Typography>
          <Box>Deep Amber</Box>
          <Box>Aspect</Box>
        </Typography>
      </Box>

      <Box>
        <img src={Nose} alt="Nose" />;
        <Typography>
          <Box>
            Nutty-praline notes
            <br /> of a patisserie
          </Box>
          <Box>Nose</Box>
        </Typography>
      </Box>

      <Box>
        <img src={Palate} alt="Palate" />;
        <Typography>
          <Box>
            Orange & salted <br />
            caramel
          </Box>
          <Box>Palate</Box>
        </Typography>
      </Box>

      <Box>
        <img src={Aspect} alt="Aspect" />;
        <Typography>
          <Box>
            Tannins & smooth <br />
            mineral notes
          </Box>
          <Box>Finish</Box>
        </Typography>
      </Box>
    </Box>
  );
}
