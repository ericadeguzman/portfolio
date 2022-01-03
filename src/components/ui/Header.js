import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

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
    height: "2em",
  },
  logoContainer:  {
    padding: 0,
    "&:hover":  {
      backgroundColor:  'transparent',
    }
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "5px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "45px",
    marginRight: "15px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/projects" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/photography" && value !== 1) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 1) {
      setValue(3);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="#fff">
          <Toolbar>
            <Button  
            disableRipple  
            className={classes.logoContainer} 
            component={Link} 
            to="/"
             onClick={() => setValue(0) }>
            <img alt="edg logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="#fff"
            >
              <Tab
                disableRipple
                className={classes.tab}
                component={Link}
                to="/"
                label="About"
              />
              <Tab
                disableRipple
                className={classes.tab}
                component={Link}
                to="/projects"
                label="Projects"
              />
              <Tab
                disableRipple
                className={classes.tab}
                component={Link}
                to="/photography"
                label="Photography"
              />
              <Tab
                disableRipple
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact"
              />
            </Tabs>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
