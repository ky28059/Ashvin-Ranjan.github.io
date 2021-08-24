// React
import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  letters: {
    marginRight: "5%",
    fontSize: "400%",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.header}>
          <div className={classes.container}>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/about">
                A
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/stuff">
                s
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/help">
                h
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/.github">
                .
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/videos">
                v
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/internals">
                i
              </a>
            </Typography>
            <Typography className={classes.letters}>
              <a className={classes.link} href="#/N">
                n
              </a>
            </Typography>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
