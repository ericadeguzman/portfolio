import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.purple,
    zIndex: 1300,
    padding: '4rem',
    color: "white",
    bottom: "0",
    left: "0",
    right: "0",
    marginTop: '-4px',
    position: "relative",
  },
  link: {
    color: theme.palette.common.white,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.link}>
            {" "}
            ericadeguzman.github.io/portfolio/ © {new Date().getFullYear()}
          </Typography>
        </Grid>
        <Grid Item xs={12}>
          <Grid
            container
            spacing={2}
            style={{ marginTop: 10 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <ExternalLink href="https://www.linkedin.com/in/ericadg/">
                <LinkedInIcon className={classes.link} />
              </ExternalLink>
            </Grid>
            <Grid item xs={4}>
              <ExternalLink href="https://www.instagram.com/edgphoto/">
                <InstagramIcon className={classes.link} />
              </ExternalLink>
            </Grid>
            <Grid item xs={4}>
              <ExternalLink href="https://github.com/ericadeguzman/portfolio">
                <GitHubIcon className={classes.link} />
              </ExternalLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
