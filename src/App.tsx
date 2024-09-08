import "./index.css";
import { Route } from 'react-router-dom';
import SlideRoutes from "react-slide-routes";

import Navbar from './components/navbar/Navbar';
import LoadingScreen from "./components/loading/LoadingScreen";
import AOSProvider from './components/aos/AOSProvider';
import Footer from "./components/footer/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Portfolios from './pages/Portfolio';
// import Curious from "./pages/Curious";

function App() {


  return (
    <>
    <AOSProvider>
      <LoadingScreen/>
      <Navbar />

      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolios />} />
        {/* <Route path="/curious" element={<Curious/>}/> */}
      </SlideRoutes>

      <Footer/>
    </AOSProvider>
    </>
  );
}


export default App;
