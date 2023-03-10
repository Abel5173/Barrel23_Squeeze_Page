import { Box, Grid } from "@mui/material";
import "./style.css";
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function ProductDescription() {
  return (
    <Grid container className="chad">
      <Container>
      <Grid container>
      <Grid item xl={7} className="title">
        BHAKTA 50 Barrel 23: “Morgan”
      </Grid>
      </Grid>
      <Grid item xl={7} lg={8} className="des">
        Rare. Ancient. Exquisite. <br />
        <br />
        BHAKTA 50 is the oldest and most uniquely collectible spirit on Earth.{" "}
        <br />
        <br /> Only 38 barrels ever made—each a distinct blend of eight Armagnac
        vintages spanning 1868–1970, selected from our world-class single
        vintage library. Introducing our Collection’s latest release: Barrel 23
        “Morgan.” Only 60 bottles will ever be released for sale online.
        Available for one week only.
      </Grid>
      <Button className="muibtn">$450 | BUY BARREL 23</Button>
      </Container>
    </Grid>
  );
}
