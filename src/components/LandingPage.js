import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';


import me from "../assets/img/me.jpg";
import books from "../assets/img/books.jpg";
import Resume from "../assets/resume.pdf";
import Projects from '../components/Projects';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("lg")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 80,
    },
  },
  me: {
    [theme.breakpoints.down("lg")]: {
      
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.down("sm")]: {
      
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  hello: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
    },
  },
  button: {
    ...theme.button,
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Box className={classes.container}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid sm={6} item>
            <img className={classes.me} src={me} alt="this is me" />
          </Grid>
          <Grid
            container
            direction="column"
            sm={6}
            item
            className={classes.hello}
            justifyContent="flex-start"
            
          >
            <Box my={2} mx={2}>
            <Grid item >
              <Typography variant="h3">Hello I'm Erica,</Typography>
              <Typography>
                a user experience designer from Long Beach, CA.
              </Typography>
            </Grid>
           
              <Box my={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={Link}
                to="/portfolio/photography"
              >
                My Projects
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                download
                href={Resume}
              >
                Download Resume
              </Button>
              </Box>
           
            </Box>
          </Grid>
        </Grid>
        </Box>

    </React.Fragment>
  );
}
