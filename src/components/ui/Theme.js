import { createMuiTheme } from "@material-ui/core/styles";


const edgPurple = "#000"
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
});
