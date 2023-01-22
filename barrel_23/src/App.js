import NavBar from "./components/NavBar";
import "./App.css";
import TestingNotes from "./components/TastingNotes";
import { Box, Grid } from "@mui/material";
import ProductDescription from "./components/ProductDescription";
import Character from "./components/Character";
import Quality from "./components/Quality";
import History from "./components/History";
import SoldOut from "./components/SoldOut";
import Honors from "./components/Honors";
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
    <Grid className="App">
      <NavBar />
      <Grid className="render">
        <ProductDescription />
=======
    <div className="App">
      {/* <NavBar /> */}
      <div className="render">
        {/* <ProductDescription /> */}
>>>>>>> d5eca0c (Quality got responsive)
      <Character />
      </Grid>
      {/* <Quality /> */}
<<<<<<< HEAD
      {/* <TestingNotes /> */}
      {/* <History /> */}
      {/* <SoldOut/> */}
      {/* <Honors /> */}
      {/* <Footer/> */}
    </Grid>
=======
      {/* <TestingNotes />
      <History />
      <SoldOut/>
      <Honors />
      <Footer/> */}
    </div>
>>>>>>> d5eca0c (Quality got responsive)
  );
}

export default App;
