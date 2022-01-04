import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" component={() => <div>About</div>} />
        <Route exact path="/potrfolio/projects" component={() => <div>Projects</div>} />
        <Route exact path="/potrfolio/photography" component={() => <div>Photography</div>} />
        <Route exact path="/potrfolio/social" component={() => <div>Social</div>} />
        <Route exact path="/potrfolio/contact" component={() => <div>Contact</div>} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
