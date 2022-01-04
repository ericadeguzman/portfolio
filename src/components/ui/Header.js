import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Resume from "../../assets/resume.pdf"

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
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
    marginTop: "20px",
  },
  tabRoot: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "5px",
    color: "#525268",
    "&:hover": {
      fontWeight: "bold",
      color: "#525268",
    },
  },
  selected: {
    fontWeight: "bold",
    color: "#525268",
  },
  button: {
    ...theme.typography.resume,
    borderRadius: "50px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  menu: {
    backgroundColor: theme.palette.common.purple,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "white",
    "&:hover": {
      opacity: 1,
      background: "transparent",
      fontWeight: "bold",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(1);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Social", link: "/portfolio/social" },
    { name: "Github", link: "/portfolio/social/github" },
    { name: "Dribble", link: "/portfolio/social/dribble" },
    { name: "Vsco", link: "/portfolio/social/vsco" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/portfolio/projects" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/portfolio/photography" && value !== 1) {
      setValue(2);
    } else if (window.location.pathname === "/portfolio/social" && value !== 1) {
      setValue(3);
    } else if (window.location.pathname === "/portfolio/contact" && value !== 1) {
      setValue(4);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/social":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/github":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case "/dribble":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(1);
        }
        break;
      case "/vsco":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(2);
        }
        break;
      case "/projects":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/photography":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="#fff"
      >
        <Tab
          disableRipple
          classes={{
            root: classes.tabRoot,
            selected: classes.selected,
          }}
          component={Link}
          to="/portfolio/about"
          label="About"
        />
        <Tab
          disableRipple
          classes={{
            root: classes.tabRoot,
            selected: classes.selected,
          }}
          component={Link}
          to="/portfolio/projects"
          label="Projects"
        />
        <Tab
          disableRipple
          classes={{
            root: classes.tabRoot,
            selected: classes.selected,
          }}
          component={Link}
          to="/portfolio/photography"
          label="Photography"
        />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          disableRipple
          classes={{
            root: classes.tabRoot,
            selected: classes.selected,
          }}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/portfolio/social"
          label="Social"
        />
        <Tab
          disableRipple
          classes={{
            root: classes.tabRoot,
            selected: classes.selected,
          }}
          component={Link}
          to="/portfolio/contact"
          label="Contact"
        />
      </Tabs>
      <Button className={classes.button} download href={Resume} variant="contained" color="primary">
        Resume
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            disableRipple
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(3);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="#fff">
          <Toolbar>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/portfolio/"
              onClick={() => setValue(0)}
            >
              <img alt="edg logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
