import { purple } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const edgPurple = "#525268";
const edgLightPurple = "#ddfeb";
const edgLightGrey = "#ddd";
const edgGrey = "#444";
const edgWhite ="#fff"

export default createTheme({
  palette: {
    common: {
      purple: `${edgPurple}`,
      lightpurple: `${edgLightPurple}`,
      lightgrey: `${edgLightGrey}`,
      grey: `${edgGrey}`,
      white: `${edgWhite}`,
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
    marginRight: 6,
    textTransform: "capitalize",
    marginBottom: 6,
  },
  typography: {
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
  overrides: {
    MuiInputLabel: {
      root: {
        color: edgGrey,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${edgLightGrey}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${edgPurple}`,
        },
      },
      multiline: {
        padding: 10,
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: "Raleway",
        fontWeight: "normal",
        color: edgGrey,
      },
      h1: {
        fontFamily: "Raleway",
        fontWeight: "normal",
        color: edgGrey,
      },
      h2: {
        fontFamily: "Raleway",
        fontWeight: "normal",
        color: edgGrey,
      },
      h3: {
        fontFamily: "Raleway",
        fontWeight: "normal",
        color: edgGrey,
      },
      h4: {
        fontFamily: "Raleway",
        fontWeight: "normal",
        color: edgGrey,
      },
    },
  },
});
