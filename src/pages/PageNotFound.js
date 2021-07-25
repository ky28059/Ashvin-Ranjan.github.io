// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 75,
    marginBottom: "-1%",
  },
  main: {
    fontSize: 30,
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={classes.header}>N</h1>
        <span className={classes.main}>
          o <br />
          t <br />
          <br />
          f <br />
          o <br />
          u <br />
          n <br />
          d <br />
        </span>
      </header>
    </div>
  );
};

export default PageNotFound;
