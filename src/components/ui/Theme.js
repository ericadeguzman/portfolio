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
    // tab: {
    //   fontFamily: "Raleway",
    //   fontWeight: 700,
    //   color:  `${edgPurple}`,
    //   "&:hover":  {
    //     fontWeight: 700,
    //     color: '#525268',
    //   },
    // },
    estimate: {
      marginRight: '15px',
      fontFamily: 'Raleway',
      fontSize: '10px',
      color: 'white',
    },
  }
});
