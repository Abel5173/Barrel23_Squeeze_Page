import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Quality() {
  const style = {
    fontFamily: "Market Deco",
    fontStyle: "bold",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "90%",
    letterSpacing: "-0.06em",
    color: "#FFFFFF",
  };
  const style1 = {
    position: "absolute",
    height: "29px",
    top: "2472px",
    fontFamily: "Libre Franklin",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "29px",
    textAlign: "center",
    color: "#FFFFFF",
  };
  return (
    <Typography>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          width: "311px",
          height: "43px",
          left: "245px",
          top: "2391px",
          fontFamily: "Market Deco",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "90%",
          letterSpacing: "-0.06em",
          color: "#FFFFFF",
        }}
      >
        Product Specs
        <br />
        <br />
      </Typography>
      <Box
        style={{
          position: "absolute",
          width: "142px",
          height: "22px",
          left: "685px",
          top: "2303px",
          fontFamily: "Market Deco",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "90%",
          display: "flex",
          alignItems: "flex-end",
          textAlign: "center",
          letterSpacing: "-0.06em",
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h5.subtitle1"
          sx={{
            position: "absolute",
            left: "100px",
            display: "flex",
            alignItems: "flex-end",
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          50
        </Typography>
        <Typography
          variant="h5.subtitle1"
          sx={{
            position: "absolute",
            left: "267px",
            display: "flex",
            alignItems: "flex-end",
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          96.4
        </Typography>
        <Typography
          variant="h5.subtitle1"
          sx={{
            position: "absolute",
            left: "453px",
            display: "flex",
            alignItems: "flex-end",
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          80
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "226px",
            height: "0px",
            left: "80px",
            top: "90px",
            border: "3px solid #FFFFFF",
            transform: "rotate(90deg)",
          }}
        ></Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "226px",
            height: "0px",
            left: "280px",
            top: "90px",
            border: "3px solid #FFFFFF",
            transform: "rotate(90deg)",
          }}
        ></Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "129px",
            height: "29px",
            left: "42px",
            top: "39px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Years Aged
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "226px",
            height: "0px",
            left: "280px",
            top: "90px",
            border: "3px solid #FFFFFF",
            transform: "rotate(90deg)",
          }}
        ></Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "129px",
            height: "29px",
            left: "232px",
            top: "39px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            /* identical to box height */

            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Proof
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "226px",
            height: "0px",
            left: "280px",
            top: "90px",
            border: "3px solid #FFFFFF",
            transform: "rotate(90deg)",
          }}
        ></Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "129px",
            height: "29px",
            left: "423px",
            top: "39px",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          No. Bottles
        </Typography>
      </Box>
      <Typography>
        <Box>
          <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
              position: "absolute",
              left: "952px",
              top: "2425px",
              display: "flex",
              alignItems: "flex-end",
              textAlign: "center",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            Islay
          </Typography>
          <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
              position: "absolute",
              left: "733px",
              top: "2425px",
              display: "flex",
              alignItems: "flex-end",
              textAlign: "center",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            Condom, FR
          </Typography>
          <Typography
            variant="h5.subtitle1"
            style={style}
            sx={{
              position: "absolute",
              left: "1143px",
              top: "2425px",
              display: "flex",
              alignItems: "flex-end",
              textAlign: "center",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >750</Typography>
        </Box>
        <Box>
          <Typography
            style={style1}
            sx={{
              width: "110px",
              left: "928px",
              top: "2600px"
            }}
          >Finish</Typography>
          <Typography
            style={style1}
            sx={{
              position: "absolute",
              left: "733px",
              top: "2400px",
            }}
          >Bottled in</Typography>
          <Typography
            style={style1}
            sx={{
              position: "absolute",
              left: "1143px",
              top: "2400px"
            }}
          >mL</Typography>
        </Box>
      </Typography>
    </Typography>
  );
}
