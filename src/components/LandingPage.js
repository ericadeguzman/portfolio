import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import me from "../assets/img/me.jpg";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.button,
    marginRight: 6,
    textTransform: "capitalize",
    marginBottom: 6,
  },
  me: {
    maxWidth: 400,
    [theme.breakpoints.down("md")]: {
        maxWidth: 400,
     },
     [theme.breakpoints.down("sm")]: {
        maxWidth: 300,
     },
  },
  txt: {
    ...theme.typography.text,
  },
  container: {
    maxWidth: "1000px",
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
       marginTop: 0,
       marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
       marginTop: 0,
       marginBottom: 50,
    },
  },
  hello: {
      paddingLeft: 10,
      paddingRight: 10,
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={5}>
            <img className={classes.me} src={me} alt="this is me" />
          </Grid>
          <Grid className={classes.hello} item xs={12} sm={5}>
            <Typography variant="h3" className={classes.txt}>
              Hello I'm Erica,
            </Typography>
            <Typography className={classes.txt}>
              a user experience designer from Orange County, CA.
            </Typography>
            <Box my={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                My Projects
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
