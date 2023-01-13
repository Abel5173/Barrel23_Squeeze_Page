import NavBar from "./components/NavBar";
import image from "./images/j.jpg";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import ProductDescription from "./components/ProductDescription";

function App() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          height: "50em",
          backgroundSize: "cover",
          filter: "brightness(75%)",
          boxShadow: "inset 3em 0.5em 10em 7em #000",
        }}
      >
        <NavBar />
        {/* <Typography component="div">
          <Box sx={{ 
            zIndex: "99", 
            fontFamily: "Market Deco",
            fontWeight: '400',
            fontSize: '80px', 
            color: 'white', 
            m: 1 }}>
            BHAKTA 50 Barrel 23: “Morgan”
          </Box>
        </Typography>
         */}
         <ProductDescription/>
      </Box>
    </>
  );
}

export default App;
