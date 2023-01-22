import { AppBar, Button, Paper, Toolbar, Typography } from "@mui/material";
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
      <Paper variant="outlined" sx={{flexGrow:1}}>
      <img src={logo} alt="Logo" />
      </Paper>
      <Button className="btn" >BUY BARREL 23</Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
