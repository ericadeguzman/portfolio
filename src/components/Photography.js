import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "350px",
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
}));

export default function Photography() {
  const classes = useStyles();

  return (

    <React.Fragment>
    <Box className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
          <Typography variant="h4"> Photography</Typography>
          <Typography variant="body1">Yeah... sorry this page is under construction. I need more coffee.</Typography>
      </Grid>
      </Box>
    </React.Fragment>
  );
}
