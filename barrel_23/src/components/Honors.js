import { Typography } from "@mui/material";
import Award1 from "./image/Award1.png";
import Award2 from "./image/Award2.png";
import Award3 from "./image/Award3.png";
import char from "./image/char.png";
import Morgan from "./image/Morgan.png";
import { Box } from "@mui/system";
import React from "react";

export default function Honors() {
  return (
    <Box
      sx={{
        mt: "3em",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        top: "4032px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Market Deco",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "90%",
            textAlign: "center",
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          Honors & Accolades
        </Typography>
        <Typography
          sx={{
            m: "1.5em",
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "34px",
            textAlign: "center",
            letterSpacing: "0.04em",
            color: "#FFFFFF",
          }}
        >
          BHAKTA 50 has won exquisite praise from critics, <br />
          collectors, and consumers alike.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: "2em",
          ml: "3.5em",
        }}
      >
        <Box
          style={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={char}
            alt="bottle"
            style={{
              height: "303px",
              position: "relative",
              right: "120px",
              zIndex: 2,
            }}
          />
          <img
            src={Award3}
            style={{
              position: "relative",
              width: "300px",
              height: "303px",
              bottom: "300px",
              zIndex: 1,
            }}
            alt="Award3"
          />
        </Box>

        <Box
          style={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={char}
            alt="bottle"
            style={{
              height: "303px",
              position: "relative",
              right: "150px",
              zIndex: 2,
            }}
          />
          <img
            src={Award2}
            style={{
              position: "relative",
              width: "300px",
              height: "303px",
              bottom: "300px",
              zIndex: 1,
            }}
            alt="Award2"
          />
        </Box>

        <Box
          style={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={char}
            alt="bottle"
            style={{
              height: "303px",
              position: "relative",
              right: "150px",
              zIndex: 2,
            }}
          />
          <img
            src={Award1}
            style={{
              position: "relative",
              width: "300px",
              height: "303px",
              bottom: "300px",
              zIndex: 1,
            }}
            alt="Award1"
          />
        </Box>
      </Box>

      <Box
      style={{
            height: "962.29px",
      }}
      >
        <Box
          style={{
            backgroundImage: `url(${Morgan})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            zIndex: 1,
          }}
        ></Box>

        <Box
          style={{
            display: "grid",
            gap: "10px",
            width: "100%",
            height: "100vh",
            background:
              "radial-gradient(75.67% 49.17% at 57.95% 63.97%, rgba(0, 0, 0, 0) 19.79%, rgba(0, 0, 0) 100%)",
            position: "relative",
            zIndex: 2,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              m: "0px",
              height: "150px",
              fontFamily: "Libre Franklin",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "36px",
              letterSpacing: "0.04em",
              color: "#FFFFFF",
            }}
          >
            “Investing in Barrel 21, can be compared with
            <br /> investing in a piece of history. It's unique, and only
            <br /> a few have the opportunity to get hold of it.”
          </Typography>

          <Typography
            style={{
              position: "relative",
              bottom: "220px",
              height: "50px",
              fontFamily: "Market Deco",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "32px",
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            - Joseph V Micallef, Forbes
          </Typography>

        </Box>
      </Box>
    </Box>
  );
}
