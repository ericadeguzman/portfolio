import { createTheme } from '@material-ui/core/styles'


const edgPurple = "#525268"
const edgLightPurple = "#DDDFEB"

export default createTheme({
  palette: {
      common: {
          purple: `${edgPurple}`,
          lightpurple: `${edgLightPurple}`,
      },
    primary: {
      main: `${edgPurple}`,
    },
    secondary: {
      main: `${edgLightPurple}`,
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
