import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, withThemeCreator } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";
import Resume from "../../assets/resume.pdf";
import { BlockRounded } from "@material-ui/icons";

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
    marginTop: "20px",
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
  drawerIcon: {
    width: "35px",
    height: "35px",
    marginTop: "10px",
  },
  drawewrIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.purple,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",  
  },
  drawerItemResume: {
    ...theme.typography.tab,
    color: theme.palette.common.purple,
    "&:hover": {
      color: 'white',
    },
  },
  drawerItemResumeBackground: {
    backgroundColor: theme.palette.common.lightpurple,
  },
  drawerItemSelected: {
    opacity: 1,
    fontWeight: 'bold',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(1);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
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
    } else if (
      window.location.pathname === "/portfolio/projects" &&
      value !== 1
    ) {
      setValue(1);
    } else if (
      window.location.pathname === "/portfolio/photography" &&
      value !== 1
    ) {
      setValue(2);
    } else if (
      window.location.pathname === "/portfolio/social" &&
      value !== 1
    ) {
      setValue(3);
    } else if (
      window.location.pathname === "/portfolio/contact" &&
      value !== 1
    ) {
      setValue(4);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/portfolio/projects":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/portfolio/photography":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/portfolio/social":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/portfolio/social/github":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case "/portfolio/social/dribble":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(1);
        }
        break;
      case "/portfolio/social/vsco":
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(2);
        }
        break;
      case "/portfolio/contact":
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
      <Button
        className={classes.button}
        download
        href={Resume}
        variant="contained"
        color="primary"
      >
        Resume
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
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
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              About
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/portfolio/projects"
            selected={value === 1}
          >
            <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Projects
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/portfolio/photography"
            selected={value === 2}
          >
            <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Photography
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/portfolio/social"
            selected={value === 3}
          >
            <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Social
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/portfolio/contact"
            selected={value === 4}
          >
            <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Contact
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 5}
          >
            <ListItemText
              className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
              disableTypography
            >
              Resume
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawewrIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
