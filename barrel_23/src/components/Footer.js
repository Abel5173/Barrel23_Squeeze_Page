import React from "react";
import { Box } from "@mui/system";
import { Stack, Typography, Button, TextField } from "@mui/material";

export default function Footer() {
  const style = {
    borderRaduis: "0px",
    border: "2.8px solid #1E1E1E",
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "140%",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#1E1E1E",
  };
  return (
    <Box
      sx={{
        pt: "6em",
        position: "relative",
        left: "0px",
        top: "5370px",
        backgroundColor: "white",
        zIndex: 5,
      }}
    >
      <Stack direction="row" spacing={5} justifyContent="center">
        <Stack spacing={5}>
          <Typography
            style={{
              // position: absolute;
              width: "430px",
              height: "129px",
              // left: 267px,
              // top: 5468px,
              fontFamily: "Market Deco",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "90%",
              letterSpacing: "-0.06em",
              color: "#1E1E1E",
            }}
          >
            Stay up to date on the world's oldest spirits
          </Typography>
          <Typography
            style={{
              width: "430px",
              height: "129px",
              fontFamily: "Libre Franklin",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "0.04em",
              color: "#1E1E1E",
            }}
          >
            What’s old is newer than ever. Receive updates on product releases,
            news, events and more.
          </Typography>
        </Stack>

        <Stack direction="column" spacing={3}>
          <TextField sx={{
            width: "100%"
          }}
          style={style} label="Your full name" variant="outlined" />
          <TextField style={style} label="You email" variant="outlined" />
          <Button sx={{
            width:170,
            borderRadius: 0
          }}
          style={style} variant="outlined">
            Sign up
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
