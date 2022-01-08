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
    maxWidth: "1000px",
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
       marginTop: 50,
       marginBottom: 50,
    },
    [theme.breakpoints.down("sm")]: {
       marginTop: 0,
       marginBottom: 50,
       marginLeft: 10,
       marginRgith: 10,
    },
  },
  txt: {
    ...theme.typography.text,
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
          <Typography variant="h4" className={classes.txt}> Photography </Typography>
      </Grid>
      </Box>
    </React.Fragment>
  );
}
