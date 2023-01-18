import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function SoldOut() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Paper
        style={{ background: "rgba(0,0,0,0)" }}
        sx={{
          boxSizing: "border-box",
          position: "absolute",
          left: "150px",
          top: "3703px",
          width: "319px",
          height: "209px",
          border: "2px solid #FFFFFF",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            position: "absolute",
            left: "13.96%",
            right: "70.97%",
            top: "63.22%",
            bottom: "36.54%",
            fontFamily: "Market Deco",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "90%",
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          SOLD OUT
        </Box>
      </Paper>
    </Box>
  );
}
