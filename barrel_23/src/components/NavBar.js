import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import logo from "./image/logo.png";
import { Box, Grid } from "@mui/material";
import React from "react";
import './style.css'

export default function NavBar() {
  return (
    <Box sx={{
      flexBox: 1,
      background: "rgba(0,0,0,0)"
    }}
      >
    <AppBar 
    sx={{
      flexBox: 1,
      background: "rgba(0,0,0,0)"
    }}
    className="navbar">
      <Toolbar>
      <box component="img"
      sx={{
        // backgroundImage: `url(${logo})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        flexGrow:1
      }}
      >ddlkvnnfmg</box>
      <Button className="btn" >BUY BARREL 23</Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
