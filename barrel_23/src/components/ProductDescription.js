import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ProductDescription() {
  return (
    <div>
      <Box
        sx={{
          fontFamily: "Market Deco",
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
      >
        <Typography>
        BHAKTA 50 Barrel 23: “Morgan”
        </Typography>
      </Box>
    </div>
  );
}
