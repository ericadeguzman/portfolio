import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import me from "../assets/img/me.jpg";
import books from "../assets/img/books.jpg";
import Resume from "../assets/resume.pdf";  

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
  books: {
    maxWidth: "800px",
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
  },
  txt: {
    ...theme.typography.text,
  },
  container: {
    maxWidth: "1000px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  hello: {
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
          <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center">        
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <img className={classes.me} src={me} alt="this is me" />
          </Grid>
          <Grid className={classes.hello} item xs={12} sm={6}>
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
                download
                href={Resume}
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
          </Grid>
          </Grid>
          {/* <Box my={2}>
          <Grid item xs={12} sm={12}><img className={classes.books} src={books} alt="ux books" /></Grid>
          </Box> */}
        </Grid>
        
      </Box>
      
    </React.Fragment>
  );
}
