import { createMuiTheme } from "@material-ui/core/styles";


const edgPurple = "#525268"
const edgGrey = "#999"

export default createMuiTheme({
  palette: {
      common: {
          purple: `${edgPurple}`,
          grey: `${edgGrey}`,
      },
    primary: {
      main: `${edgPurple}`,
    },
    secondary: {
      main: `${edgGrey}`,
    },
  },
  typography: {
    tab: {
      fontSize: '13px',
      fontFamily: "Raleway",
      fontWeight: "normal",
    },
    resume: {
      fontFamily: 'Raleway',
      fontSize: '13px',
      color: 'white',
      textTransform: 'none',
      marginTop: '20px'
    },
  }
});
