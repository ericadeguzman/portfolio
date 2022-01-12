import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExternalLink } from "react-external-link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import emailjs from "@emailjs/browser";

import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Result = () => {
  return <p>Your message has been sent. talk to you soon!</p>;
};
const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "350px",
    },
  },
  button: {
    ...theme.button,
    marginRight: 0,
  },
  message: {
    border: `1px solid ${theme.palette.common.lightgrey}`,
    marginTop: "20px",
    borderRadius: 5,
  },
}));

export default function Contact(props) {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yqmd7nv",
        "template_7bee1g8",
        form.current,
        "user_dSKPK8gx0rnh8sppymvI5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  const classes = useStyles();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Box my={5}>
        <form ref={form} onSubmit={sendEmail}>
          <Grid
            container
            direction="column"
            alignContent="center"
            className={classes.container}
          >
            <Grid item>
              <Box my={2}>
                <Typography variant="h4">Hello!</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Divider />
              <Box my={2}>
                <Typography variant="body1">
                  Ready to a start a project with me?
                </Typography>
                <Box mt={1}>
                  <Typography variant="body1">
                    Email me at <a style={{textDecoration: "none", fontWeight: "700", color: "#525268",}} href="mailto:erricadg@gmail.com">erricadg@gmail.com </a> 
                    or fill out the form below:
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box my={2}>
                <TextField
                  name="name"
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChangeCapture={(event) => setName(event.target.value)}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box my={2}>
                <TextField
                  name="email"
                  fullWidth
                  label="Email"
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box my={2}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  name="message"
                  multiline
                  rows={10}
                  fullWidth
                  id="message"
                  onChangeCapture={(event) => setMessage(event.target.value)}
                />
              </Box>
            </Grid>
            <Grid
              container
              item
              direction="row"
              xs={12}
              md={5}
              justifyContent="flex-end"
            >
              <Box my={1}>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0
                  }
                  color="primary"
                  className={classes.button}
                  variant="contained"
                  type="submit"
                  value="Send"
                >
                  Send Message 
                  <MailOutlineIcon  style={{paddingLeft: '10px'}}/>
                </Button>   
              </Box>
            </Grid>
            <Grid item container  direction="row" xs={12} md={5}  justifyContent="flex-end">
            <Typography variant="body1">
                {result ? <Result /> : null}
                </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}
