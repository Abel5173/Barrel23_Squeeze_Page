import React from "react";
import "./style.css";
import image1 from "./image/char.png";
import image2 from "./image/image2.png";
import { Box, Stack, Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export default function Character() {
  return (
    <Grid
      container
      className="collection"
    >
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        sm={3}
        xs={12}
        className="grid1"
      >
        The Bhakta 50 Collection
        {/* <br />
        <br /> */}
      </Grid>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className="grid2">
          Fifty Years at its youngest—and more than one hundred fifty at its
          oldest—BHAKTA 50 is our flagship bottling. Carrying an astounding age
          statement nearly unimaginable in a market where 12 and 13 Year
          whiskies are considered “old,” only 38 barrels of BHAKTA 50 have ever
          been produced. Each expression is a blend of 8 Armagnac vintages
          spanning from 1868–1970, finished in Scotch Whisky casks.
        </Grid>
        <Grid className="images"
          item
          style={{ textAlign: "center" }}
          xl={8}
          lg={8}
          md={8}
          sm={8}
          xs={12}
        >
          {/* <Stack 
            direction="row"
            className="images"
          > */}
              <img
                className="img3"
                src={image1}
                alt="Collection"  
              />
              <img
                className="img2"
                src={image1}
                alt="Collection"
                style={
                  {
                    // position: "absolute",
                    // width: "388.95px",
                    // height: "388.95px",
                    // left: "765.02px",
                    // top: "1169.76px",
                    // zIndex: "2",
                  }
                }
              />
              <img
                className="img1"
                src={image1}
                alt="Collection"
                style={
                  {
                    // position: "absolute",
                    // width: "388.95px",
                    // height: "388.95px",
                    // left: "865.02px",
                    // top: "1149.76px",
                    // zIndex: "1",
                  }
                }
              />
          {/* </Stack> */}
        </Grid>
      </Grid>
      <Grid container>
      <img
        src={image2}
        alt="Collection"
      />
      <Typography
        variant="h5"
        sx={
          {
            // position: "absolute",
            // width: "457px",
            // height: "86px",
            // left: "735px",
            // top: "1669px",
            // fontFamily: "Market Deco",
            // fontStyle: "normal",
            // fontWeight: 400,
            // fontSize: "48px",
            // lineHeight: "90%",
            // letterSpacing: "-0.06em",
            // color: "#FFFFFF",
          }
        }
      >
        The Bhakta 50 Collection
        <br />
        <br />
      </Typography>
      <Box
        style={
          {
            // position: "absolute",
            // width: "493px",
            // height: "285px",
            // left: "735px",
            // top: "1854px",
            // fontFamily: "Libre Franklin",
            // fontStyle: "normal",
            // fontWeight: "700",
            // fontSize: "24px",
            // lineHeight: "140%",
            // letterSpacing: "0.04em",
            // color: "#FFFFFF",
          }
        }
      >
        J.P. Morgan Like the innovative banking titan for which it is named,
        Barrel 23: “Morgan” sets a new “gold standard” for exquisite,
        investment-grade spirits. Crafted from eight different Armagnac
        vintages—including 1893, the year J.P. Morgan rescued the U.S. Treasury
        from collapse—with BHAKTA 50 “Morgan” we honor the titans and tycoons
        who forged the modern world.
      </Box>
      </Grid>
      <Box></Box>
    </Grid>
  );
}
