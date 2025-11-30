import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Bitcoin from "./components/Bitcoin.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";


function App () {
return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
      </Routes>
    </BrowserRouter>
  );
  } 


export default App;
      