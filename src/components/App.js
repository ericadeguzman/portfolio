import React,  {useState, } from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LandingPage from "./LandingPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const rootElement = document.getElementById("root");


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={
        selectedIndex} setSelectedIndex={setSelectedIndex}/>
      
      <Routes>
        <Route path="/portfolio/" element={<LandingPage />} />
        <Route path="/portfolio/projects" element={<Footer />} />
        <Route path="/portfolio/photography" element={<Footer />}/>
        <Route path="/portfolio/social" element={<Footer />} />
        <Route path="/portfolio/contact" element={<Footer />}/>
      </Routes>

     <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
