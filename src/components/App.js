import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../components/ui/Theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="fixed" color="primary">
      <Toolbar>Edg Dev</Toolbar>
    </AppBar>
    <div className="class">
{[...new Array(120)]
  .map(
    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
  )
  .join('\n')}
</div>
</ThemeProvider>



  )
}

export default App;
