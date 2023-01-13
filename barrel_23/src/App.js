import NavBar from "./components/NavBar";
import image from "./images/j.jpg";
import { Box } from "@mui/system";

function App() {
  return (
    <Box style={{ backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat", 
    height:"50em",
    backgroundSize:"cover",
    filter: 'brightness(75%)',
    backgroundPosition: 'center',
    boxShadow: 'inset 3em 0.5em 10em 7em #000',
    }}>
      <NavBar /> 
    </Box>
    // <div>
      // {/* <ProductDescription /> */}
    // </div>
  );
}

export default App;
