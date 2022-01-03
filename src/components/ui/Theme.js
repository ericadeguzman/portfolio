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
    h3: {
      fontWeight: 600,
      fontSize: 18,
      color: `${edgPurple}`,
    }
  }
});
