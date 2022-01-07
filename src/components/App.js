import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route exact path="/portfolio/about" component={() => <div>About</div>} />
        <Route exact path="/portfolio/projects" component={() => <div>Projects</div>} />
        <Route exact path="/portfolio/photography" component={() => <div>Photography</div>} />
        <Route exact path="/portfolio/social" component={() => <div>Social</div>} />
        <Route exact path="/portfolio/contact" component={() => <div>Contact</div>} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
