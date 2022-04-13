import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import thumb_peak from "../assets/img/projects/thumb_peak.png";
import thumb_sway from "../assets/img/projects/thumb_sway.png";
import thumb_fowler from "../assets/img/projects/thumb_fowler.png";
import { BorderTop } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {     
      paddingRight: 20,
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 10,
      paddingLeft: 10,
    },
  },

}));

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Grid container direction="column" alignContent="" justifyContent="flex-start">
          <Grid item xs={12}>
            <Typography variant="h4"> Projects</Typography>  
           </Grid>
           <Box my={1}/>
           <Typography>I'm working on it... Need more coffee. Send help.</Typography>
          {/* <Grid style={{marginTop: 20,}} container item direction="row" xs={12} justifyContent="center">
            <Grid item xs={12} sm={6} direction="column">
              <Grid item><img style={{width: '100%'}} src={thumb_fowler} alt="Fowler School of Engineering" /></Grid>
              <Grid item><img style={{width: '100%'}} src={thumb_sway} alt="Sway" /></Grid>
            </Grid>
            <Grid item xs={12} sm={6} >
            <img style={{width: '100%'}}  src={thumb_peak} alt="Peak Fitness" />
            <Box my={6}/>
            </Grid>
          </Grid> */}
        </Grid>
      </Box>
      
    </React.Fragment>
  );
}