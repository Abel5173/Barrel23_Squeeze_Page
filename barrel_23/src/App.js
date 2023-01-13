import NavBar from "./components/NavBar";
import image from "./images/j.jpg";
import { Box } from "@mui/material";
import ProductDescription from "./components/ProductDescription";

function App() {
  return (
      <Box
        style={{
          display: 'block',
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          height: "50em",
          backgroundSize: "cover",
          filter: "brightness(75%)",
          boxShadow: "inset 3em 0.5em 10em 7em #000",
        }}
      >
        <NavBar />
        <ProductDescription />
      </Box>
  );
}

export default App;
