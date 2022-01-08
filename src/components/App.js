import React,  {useState, } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={
        selectedIndex} setSelectedIndex={setSelectedIndex}/>
      
      <Routes>
        <Route exact path="/portfolio/about" component={() => <div style={{height: '2000px'}}>About</div>} />
        <Route exact path="/portfolio/projects" component={() => <div>Projects</div>} />
        <Route exact path="/portfolio/photography" component={() => <div>Photography</div>} />
        <Route exact path="/portfolio/social" component={() => <div>Social</div>} />
        <Route exact path="/portfolio/contact" component={() => <div>Contact</div>} />
      </Routes>

     <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
