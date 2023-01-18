import { Box } from "@mui/system";
import React from "react";
import Distilled from "./image/distilled.png";
import { Typography, Button } from "@mui/material";

export default function History() {
  const style2 = {
    background:
      "radial-gradient(55.67% 59.17% at 57.95% 53.97%, rgba(0, 0, 0, 0) 19.79%, rgba(0, 0, 0, 0.9) 100%)",
    width: "100%",
    position: "absolute",
    height: "394px",
    left: "0px",
    top: "3039px",
    zIndex: 99,
  };
  return (
    <Box>
      <Box style={style2}>
      <Typography
          sx={{
            position: "absolute",
            left: "274px",
            top: "123px",
            fontFamily: "Market Deco",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "92%",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          History, Distilled
        </Typography>
        <Button
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "300px",
            height: "50px",
            left: "274px",
            top: "223px",
            border: "2.8px solid #FFFFFF",
            borderRadius: "0px"
          }}
        >
          <Box
            sx={{
              fontFamily: "Libre Franklin",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            $450 | BUY BARREL 23
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Distilled})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          position: "absolute",
          height: "390px",
          zIndex: 1,
          top: "3043px",
        }}
      >
      </Box>
        <Box sx={{
            position: "absolute",
            width: "648px",
            height: "86px",
            left: "396px",
            top: "3555px",
            fontFamily: 'Market Deco',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '90%',
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
        }}>
        Introducing the next chapter in BHAKTA 50's epic lineage
        </Box>
    </Box>
  );
}
