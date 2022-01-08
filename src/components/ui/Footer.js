import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { ExternalLink } from 'react-external-link';


import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.purple,
    zIndex: 1300,
    position: "relative",
    padding: "2rem",
    textAlign: "center",
    color: "white",
    fontFamily: "Raleway",
    fontSize: "14px",
  },
  link: {
    color: theme.palette.common.link,
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          ericadeguzman.github.io/portfolio/ © {new Date().getFullYear()}
        </Grid>
        <Grid Item xs={12}>
          <Grid
            style={{ marginTop: 20 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            <Grid item xs={1}>
            <ExternalLink href="https://www.linkedin.com/in/ericadg/" >
              <LinkedInIcon className={classes.link} />
              </ExternalLink>
            </Grid>
            <Grid item xs={1}>
            <ExternalLink href="https://www.instagram.com/edgphoto/" >
              <InstagramIcon className={classes.link}/>
              </ExternalLink>
            </Grid>
            <Grid item xs={1}>
            <ExternalLink href="https://github.com/ericadeguzman/portfolio" >
              <GitHubIcon className={classes.link}/>
              </ExternalLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}