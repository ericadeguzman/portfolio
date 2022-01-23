import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import jiufen from "../assets/img/photography/taiwan/jiufen_900.jpg";
import jiufenLight from "../assets/img/photography/taiwan/jiufenLight.jpg";
import cook from "../assets/img/photography/taiwan/cook.jpg";
import riceTerraces from "../assets/img/photography/banaue/riceTerraces.jpg";
import banaueLodge from "../assets/img/photography/banaue/lodge.jpg";
import banaueVillage from "../assets/img/photography/banaue/banaueVillage.jpg";

const useStyles = makeStyles((theme) => ({
  photographyHeader: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: 20,
    marginTop: 50,
    marginBottom: 50,
    maxWidth: 1200,
    borderBottomStyle: 'solid',
    borderBlockColor: "#ddd",
    borderBottomWidth: '1px',
    [theme.breakpoints.down("md")]: {
      paddingRight: 20,
      paddingLeft: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    maxWidth: 600,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "350px",
      paddingRight: 10,
      paddingLeft: 10,
    },
  },
  container2: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    maxWidth: 900,
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
      <Box className={classes.photographyHeader}>
      <Grid container direction="column" alignContent="flex-start">
          <Grid item>
            <Typography variant="h4">Photography </Typography>
          </Grid>
          </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column" alignContent="center">
          {/* <Grid item>
            <Typography variant="h4">Taiwan </Typography>
          </Grid>
          <Box my={1}/> */}
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={jiufen} alt="Jiufen, Taiwan" />
          <Typography style={{textAlign: 'right'}} variant="body1">
            Jiufen, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={jiufenLight} alt="Jiufen alley" />
          <Typography style={{textAlign: 'right'}} variant="body1">
          Jiufen street alley, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column" alignContent="center">
          <Grid item xs={12}>
          <img style={{width: '100%'}}  src={cook} alt="Jiufen, Taiwan" />
          <Typography style={{textAlign: 'right'}} variant="body1">
            Jiufen, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          {/* <Grid item>
          <Box >
            <Typography variant="h4"> Banaue</Typography>
            </Box>
          </Grid> */}
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={riceTerraces} alt="Rice Terraces, Banaue" />
          <Typography style={{textAlign: 'right'}} variant="body1">
          Rice Terraces, Banaue 2018
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column" alignContent="flex-start">
          <Grid container direction="column" >
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={banaueLodge} alt="Banaue, Philippines" />
          <Typography style={{textAlign: 'right'}} variant="body1">
          Banaue, Philippines 2018
          </Typography>
          </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <Box my={1}/>
          <img style={{width: '100%'}}  src={banaueVillage} alt="Village, Banaue" />
          <Typography style={{textAlign: 'right'}} variant="body1">
          Village, Banaue 2018
          </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
