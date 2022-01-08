import { createTheme } from "@material-ui/core/styles";

const edgPurple = "#525268";
const edgLightPurple = "#DDDFEB";

export default createTheme({
  palette: {
    common: {
      purple: `${edgPurple}`,
      lightpurple: `${edgLightPurple}`,
      link: "#fff",
    },
    primary: {
      main: `${edgPurple}`,
    },
    secondary: {
      main: `${edgLightPurple}`,
    },
  },
  button: {
    fontSize: "13px",
    fontFamily: "Raleway",
    fontWeight: "normal",
  },
  typography: {
    text: {
      fontFamily: "Raleway",
      fontWeight: "normal",
      color: "#444",
    },
    tab: {
      fontSize: "13px",
      fontFamily: "Raleway",
      fontWeight: "normal",
    },
    resume: {
      fontFamily: "Raleway",
      fontSize: "13px",
      color: "white",
      textTransform: "none",
      marginTop: "20px",
    },
  },
});
