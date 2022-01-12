import React,  {useState, } from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Photography from "./Photography";
import Social from "./Social";
import Contact from "./Contact";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  const rootElement = document.getElementById("root");


  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
      <Header value={value} setValue={setValue} selectedIndex={
        selectedIndex} setSelectedIndex={setSelectedIndex}/>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />}/>
        {/* <Route path="/social" element={<Social />} /> */}
        <Route path="/contact" element={<Contact />}/>
      </Routes>

     <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
