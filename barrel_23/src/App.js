import NavBar from "./components/NavBar";
import image from "./images/j.jpg";

function App() {
  return (
    <div style={{ backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat", 
    // width:"70%", 
    height:"50em",
    backgroundSize:"cover",
    filter: 'brightness(75%)',
    backgroundPosition: 'center',
    boxShadow: 'inset 3em 0.5em 10em 7em #000',
    }}>
      <NavBar /> 
    </div>
    // <div>
      // {/* <ProductDescription /> */}
    // </div>
  );
}

export default App;
