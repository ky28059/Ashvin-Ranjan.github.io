// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    writingMode: "tb-rl",
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={classes.text}>Not found</h1>
      </header>
    </div>
  );
};

export default PageNotFound;
