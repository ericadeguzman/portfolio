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
    marginBottom: '.9em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '.9em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '.9em'
    },
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
    "& .MuiLitItemText-root": {
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
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
    { name: "Social", link: "/portfolio/social", activeIndex: 3, selectedIndex: 0 },
    { name: "Github", link: "/portfolio/social/github", activeIndex: 3, selectedIndex: 1  },
    { name: "Dribble", link: "/portfolio/social/dribble", activeIndex: 3, selectedIndex: 2 },
    { name: "Vsco", link: "/portfolio/social/vsco", activeIndex: 3, selectedIndex: 3  },
  ];
  const routes= [
    {name: "About", link: "/portfolio/", activeIndex: 0 },
    {name: "Projects", link: "/portfolio/projects/", activeIndex: 1 },
    {name: "Photography", link: "/portfolio/photography", activeIndex: 2 },
    {name: "Social", link: "/portfolio/social", activeIndex: 3, ariaOwns: anchorEl ? "simple-menu" : undefined, 
  ariaPopup: anchorEl ? "true" : undefined, 
mouseOver: (event) => handleClick(event), 
},
    {name: "Contact", link: "/portfolio/contact", activeIndex: 4 },
  ]

  useEffect(() => {
  [...menuOptions, ...routes].forEach(route => {
    switch (window.location.pathname) {
      case `${route.link}`:
        if  (value !== route.activeIndex) {
          setValue(route.activeIndex)
          if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
            setSelectedIndex(route.selectedIndex)
          }
        }
        break;
        default:
          break;
    }
  })  
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="#fff"
      >
        {routes.map((route, index) => (
        <Tab 
        key={`${route.link}${route.index}`}
        disableRipple
        classes={{
          root: classes.tabRoot,
          selected: classes.selected,
        }} 
        component={Link}
        to={route.link}
        label={route.name}
        aria-owns={route.ariaOwns}
        aria-haspopup={route.ariaPopup}
        onMouseOver={route.mouseOver}
        />
        ))}
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
        style={{zIndex: 1302}}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            disableRipple
            key={`${option}${selectedIndex}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(3);
              handleClose();
            }}
            seleced={i === selectedIndex && value === 1}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem 
            key={`${route.link}${route.activeIndex}`}
            divider 
            button 
            component={Link} 
            to={route.link} 
            selected={value === route.activeIndex}
            classes={{selected: classes.drawerItemSelected}}
            onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}
            }>
              <ListItemText 
              className={classes.drawerItem}  
              disableTypography
              >{route.name}
              </ListItemText>
            </ListItem>
          ))}
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
            classes={{selected: classes.drawerItemSelected}}
          >
            <ListItemText
              className={classes.drawerItem}
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
        <AppBar position="fixed" color="#fff" className={classes.appBar}>
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
