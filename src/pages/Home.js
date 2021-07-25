// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
//import { Tooltip } from "@material-ui/core/Tooltip";
//import { Typography } from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 75,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.header}>
          {/* <Tooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Tooltip with HTML</Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
              </React.Fragment>
            }
          > */}
          A{/* </Tooltip>{" "} */} s h . v i n
        </div>
      </header>
    </div>
  );
};

export default Home;
