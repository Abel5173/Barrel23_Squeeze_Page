import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import logo from "./image/logo.png";
import { Box } from "@mui/system";
import React from "react";

export default function NavBar() {
  const style1 = {
    borderRadius: 0,
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "17px",
    textAlign: "center",
    letterSpacing: "0.05em",
    color: "#E2CD7A",
    background: "#1E1E1E",
    border: "2px solid #E2CD7A",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{boxShadow: "0", background: "rgba(255,255,255,0)"}}>
        <Toolbar>
        <Typography sx={{ flexGrow: 1 }}><img src={logo} alt="Logo" /></Typography>
          <Button style={style1}>BUY BARREL 23</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
