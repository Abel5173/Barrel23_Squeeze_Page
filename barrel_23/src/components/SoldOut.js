import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function SoldOut() {
  const style = {
    fontFamily: "Market Deco",
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: "90%",
    letterSpacing: "-0.06em",
    color: "#FFFFFF",
  };
  return (
    <Box
      sx={{
        position: "relative",
        top: "3703px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        justifyContent: "space-around",
        zIndex: 999,
      }}
    >
      <Paper
        style={{ background: "rgba(0,0,0,0)" }}
        sx={{
          boxSizing: "border-box",
          width: "319px",
          border: "2px solid #FFFFFF",
          borderRadius: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: "1em",
          }}
        >
          <Typography
            style={style}
            sx={{
              borderBottom: "2px solid white",
              fontSize: "16px",
              p: "0.65em",
              flexGrow: 1,
            }}
          >
            SOLD OUT
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: "0.35em",
              pl: "1em",
              pr: "1em",
              alignItems: "center",
            }}
          >
            <Typography
              style={style}
              sx={{
                gridColumnStart: "1",
                gridColumnEnd: "2",
                fontSize: "96px",
              }}
            >
              20
            </Typography>
            <Typography
              sx={{
                gridColumn: "2 / span 3",
                fontSize: "24px",
                fontFamily: "Libre Franklin",
                fontStyle: "normal",
                fontWeight: 900,
                textAlign: "center",
                lineHeight: "30px",
                letterSpacing: "-0.06em",
                color: "#FFFFFF",
              }}
            >
              Barrel
              <br />
              “Fitzgerald”
            </Typography>
            <Box
              style={style}
              sx={{
                gridColumn: "1 / 5",
                flexGrow: 1,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                justifyContent: "space-between",
                gap: "0.35em",
                pl: "1em",
                pr: "1em",
                mb: "1em",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                350
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                750
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                $399
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Bottles
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                mL
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Price
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Paper
        style={{ background: "rgba(0,0,0,0)" }}
        sx={{
          boxSizing: "border-box",
          width: "319px",
          border: "2px solid #FFFFFF",
          borderRadius: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: "1em",
          }}
        >
          <Typography
            style={style}
            sx={{
              borderBottom: "2px solid white",
              fontSize: "16px",
              p: "0.65em",
              flexGrow: 1,
            }}
          >
            SOLD OUT
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: "0.35em",
              pl: "1em",
              pr: "1em",
              alignItems: "center",
            }}
          >
            <Typography
              style={style}
              sx={{
                gridColumnStart: "1",
                gridColumnEnd: "2",
                fontSize: "96px",
              }}
            >
              21
            </Typography>
            <Typography
              sx={{
                gridColumn: "2 / span 3",
                fontSize: "24px",
                fontFamily: "Libre Franklin",
                fontWeight: 900,
                textAlign: "center",
                lineHeight: "30px",
                letterSpacing: "-0.06em",
                color: "#FFFFFF",
              }}
            >
              Barrel
              <br />
              “Earhart”
            </Typography>
            <Box
              style={style}
              sx={{
                gridColumn: "1 / 5",
                flexGrow: 1,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                justifyContent: "space-between",
                gap: "0.35em",
                pl: "1em",
                pr: "1em",
                mb: "1em",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                350
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                750
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                $399
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Bottles
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                mL
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Price
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Paper
        style={{ background: "rgba(0,0,0,0)" }}
        sx={{
          boxSizing: "border-box",
          width: "319px",
          border: "2px solid #FFFFFF",
          borderRadius: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: "1em",
          }}
        >
          <Typography
            style={style}
            sx={{
              borderBottom: "2px solid white",
              fontSize: "16px",
              p: "0.65em",
              flexGrow: 1,
            }}
          >
            SOLD OUT
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: "0.35em",
              pl: "1em",
              pr: "1em",
              alignItems: "center",
            }}
          >
            <Typography
              style={style}
              sx={{
                gridColumnStart: "1",
                gridColumnEnd: "2",
                fontSize: "96px",
              }}
            >
              22
            </Typography>
            <Typography
              sx={{
                gridColumn: "2 / span 3",
                fontSize: "24px",
                fontFamily: "Libre Franklin",
                fontWeight: 900,
                textAlign: "center",
                lineHeight: "30px",
                letterSpacing: "-0.06em",
                color: "#FFFFFF",
              }}
            >
              Barrel
              <br />
              “Patton”
            </Typography>
            <Box
              style={style}
              sx={{
                gridColumn: "1 / 5",
                flexGrow: 1,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                justifyContent: "space-between",
                gap: "0.35em",
                pl: "1em",
                pr: "1em",
                mb: "1em",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                350
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                750
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Market Deco",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                $399
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Bottles
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                mL
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Libre Franklin",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Price
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
