import './App.css';
import { Paper } from '@mui/material';
import History from "./components/History.jsx"
import Quote from './components/Quote';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <History/>
    <Quote/>
    <Footer/>
    </div>
    
  );
}

export default App;
