import NavBar from "./components/NavBar";
import image from "./images/j.jpg";
import image1 from "./images/char.png";
import { Box } from "@mui/material";
import ProductDescription from "./components/ProductDescription";
import Character from "./components/Character";

function App() {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 3em 0.5em 15em 10em #000",
          height: "50em",
          backgroundSize: "cover",
          filter: "brightness(75%)",
        }}
      >
        <NavBar />
        <ProductDescription />
      </Box>
      <Box
        style={{
          background: " #1E1E1E",
          height: "50em",
          boxShadow: "inset 3em 0.5em 10em 7em #000",
        }}
      >
        <Character />
        <img
          src={image1}
          alt="Collection"
          style={{
            position: "absolute",
            width: "388.95px",
            height: "388.95px",
            left: "765.02px",
            top: "1149.76px",
          }}
        />
        <br />
        <br />
        <img
          src={image2}
          alt="Collection"
          style={{
            position: "absolute",
            width: "440px",
            height: "592px",
            left: "194px",
            top: "1669px",
          }}
        />
        <Typography>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              width: "457px",
              height: "86px",
              left: "735px",
              top: "1736px",
              fontFamily: "Market Deco",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "90%",
              /* or 43px */
              letterSpacing: "-0.06em",
              color: "#FFFFFF",
            }}
          >
            The Bhakta 50 Collection
            <br />
            <br />
          </Typography>
          <Box
            style={{
              position: "absolute",
              width: "493px",
              height: "285px",
              left: "735px",
              top: "1854px",
              fontFamily: "Libre Franklin",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "140%",
              /* or 28px */
              letterSpacing: "0.04em",
              color: "#FFFFFF",
            }}
          >
            J.P. Morgan

Like the innovative banking titan for which it is named, Barrel 23: “Morgan” sets a new “gold standard” for exquisite, investment-grade spirits. Crafted from eight different Armagnac vintages—including 1893, the year J.P. Morgan rescued the U.S. Treasury from collapse—with BHAKTA 50 “Morgan” we honor the titans and tycoons who forged the modern world.
          </Box>
          <Box></Box>
        </Typography>
      </Box>
    </>
  );
}

export default App;
