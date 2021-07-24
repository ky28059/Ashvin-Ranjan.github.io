// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    writingMode: "tb-rl",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1>A s h . v i n</h1>
      </header>
    </div>
  );
};

export default Home;
