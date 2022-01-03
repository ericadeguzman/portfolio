import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import theme from "../components/ui/Theme";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box my={1} mx={1}>
        <Typography>Hello!,</Typography>
        <Typography style={{ marginTop: 10 }}>
          Welcome to my github page. It's still in development so come back
          later?
        </Typography>
        <Typography style={{ marginTop: 10 }}>Okay Thanks. Bye!!!!</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
