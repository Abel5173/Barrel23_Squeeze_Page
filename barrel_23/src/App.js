import NavBar from "./components/NavBar";
import TestingNotes from "./components/TastingNotes";
import { Box } from "@mui/material";
import ProductDescription from "./components/ProductDescription";
import Character from "./components/Character";
import Quality from "./components/Quality";
import History from "./components/History";

function App() {
  const styleA = {
    backgroundColor: "#050505",
    height: "5818px",
  };
  return (
    <Box style={styleA}>
      <NavBar />
      <ProductDescription />
      <Character />
      <Quality />
      <TestingNotes />
      <History />
    </Box>
  );
}

export default App;
