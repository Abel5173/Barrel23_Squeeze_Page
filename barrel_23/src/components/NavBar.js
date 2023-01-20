import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import logo from "./image/logo.png";
import { Box, Grid } from "@mui/material";
import React from "react";
import './style.css'

export default function NavBar() {
  return (
    
    <Grid className="navbar">
      <img src={logo} alt="Logo" />
      <Button className="btn" >BUY BARREL 23</Button>
    </Grid>
  );
}
