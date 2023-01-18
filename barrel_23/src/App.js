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
      </Box>
    </>
  );
}

export default App;
