import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: '2em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    fontFamily: "Raleway",
    fontWeight: "700",
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="#fff">
          <Toolbar>
           <img alt="edg logo" className={classes.logo} src={logo} />
           <Tabs className={classes.tabContainer}>
             <Tab className={classes.tab} label="About" />
             <Tab className={classes.tab} label="Projects" />
             <Tab className={classes.tab} label="Photography" />
             <Tab className={classes.tab} label="Resume" />
             <Tab className={classes.tab} label="Contact" />
           </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
