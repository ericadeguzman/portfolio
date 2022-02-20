import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import jiufen from "../assets/img/photography/taiwan/jiufen_900.jpg";
import nightMarket_alley from "../assets/img/photography/taiwan/nightMarket_alley.jpg";
import old_couple from "../assets/img/photography/taiwan/old_couple.jpg";
import old_couple1 from "../assets/img/photography/taiwan/old_couple1.jpg";
import motorcycle_mom from "../assets/img/photography/taiwan/motorcycle_mom.jpg";
import motorcycle_alley from "../assets/img/photography/taiwan/motorcycle_alley.jpg";
import khoa from "../assets/img/photography/taiwan/khoa_nightmarket.jpg";
import khoa1 from "../assets/img/photography/taiwan/khoa_nightmarket1.jpg";
import girl_nightmarket from "../assets/img/photography/taiwan/girl_nightmarket.jpg";
import grill_nightmarket from "../assets/img/photography/taiwan/grill_nightmarket.jpg";
import gma from "../assets/img/photography/taiwan/gma.jpg";
import jiufenLight from "../assets/img/photography/taiwan/jiufenLight.jpg";
import cook from "../assets/img/photography/taiwan/cook.jpg";
import couple from "../assets/img/photography/taiwan/couple_pug.jpg";
import yellowCoat from "../assets/img/photography/taiwan/yellow_coat.jpg";
import riceTerraces from "../assets/img/photography/banaue/riceTerraces.jpg";
import banaueLodge from "../assets/img/photography/banaue/lodge.jpg";
import banaueVillage from "../assets/img/photography/banaue/banaueVillage.jpg";
import banff from "../assets/img/photography/banff/banff.jpg";
import bowRiver from "../assets/img/photography/banff/bowRiver.jpg";
import hiking from "../assets/img/photography/banff/hiking.jpg";
import jasper from "../assets/img/photography/banff/jasper.jpg";


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
  photoCaption: {
    ...theme.typography.default,
    fontSize: 13,
  },
}));

export default function Photography() {
  const classes = useStyles();

  return (
    <React.Fragment>
            <Box className={classes.photographyHeader}>
      <Grid container direction="column" alignContent="flex-start">
          <Grid item>
            <Typography variant="h4">Jiufen, Taiwan 2019</Typography>
          </Grid>
          </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={jiufen} alt="Jiufen" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
         Jiufen, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={jiufenLight} alt="boy walking throught alley in Jiufen" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Jiufen, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={yellowCoat} alt="Biker with a yellow rain coat" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
         Yellow Coat - Jiufen, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.photographyHeader}>
      <Grid container direction="column" alignContent="flex-start">
          <Grid item>
            <Typography variant="h4"> Night Market, Taiwan 2019 </Typography>
          </Grid>
          </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={khoa1} alt="khoa at the night market" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={motorcycle_mom} alt="mom and daughter on motorcycle" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={old_couple} alt="old couple" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={couple} alt="couple with bull dog" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={grill_nightmarket} alt="grill" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={girl_nightmarket} alt="girl walking" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
  
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12}>
          <img style={{width: '100%'}}  src={gma} alt="grandma" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={nightMarket_alley} alt="night market alley" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={old_couple1} alt="old couple" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img style={{width: '100%'}}  src={motorcycle_alley} alt="Motorcyclist" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">       
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={khoa} alt="khoa at the night market" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Night Market, Taiwan 2019
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.photographyHeader}>
      <Grid container direction="column" alignContent="flex-start">
          <Grid item>
            <Typography variant="h4">Banaue Rice Terraces, Philippines 2018</Typography>
          </Grid>
          </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={riceTerraces} alt="Rice Terraces, Banaue" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Rice Terraces - Banaue, Philippines 2018
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column" alignContent="flex-start">
          <Grid container direction="column" >
          <Grid item  xs={12}>
          <img style={{width: '100%'}}  src={banaueLodge} alt="Banaue, Philippines" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
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
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Banaue, Philippines 2018
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.photographyHeader}>
      <Grid container direction="column" alignContent="flex-start">
          <Grid item>
            <Typography variant="h4">Alberta, Canada 2017</Typography>
          </Grid>
          </Grid>
      </Box>
      <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <Box my={1}/>
          <img style={{width: '100%'}}  src={banff} alt="Banff  National Park, Canada" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Banff National Park, Canada
          </Typography>
          </Grid>
        </Grid>
        </Box>
        <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <Box my={1}/>
          <img style={{width: '100%'}}  src={bowRiver} alt="Bow River, Canada" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Bow River - Banff National Park, Canada
          </Typography>
          </Grid>
        </Grid> 
        </Box>
        <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <Box my={2}/>
          <img style={{width: '100%'}}  src={hiking} alt="Banff National Park, Canada" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Banff National Park, Canada
          </Typography>
          </Grid>
        </Grid>
        </Box>
        <Box className={classes.container2}>
        <Grid container direction="column" alignContent="center">
          <Grid item  xs={12}>
          <Box my={1}/>
          <img style={{width: '100%'}}  src={jasper} alt="Jasper Park, Canada" />
          <Typography style={{textAlign: 'right'}} className={classes.photoCaption}>
          Jasper National Park, Canada
          </Typography>
          </Grid>
        </Grid>
       </Box>
    </React.Fragment>
  );
}
