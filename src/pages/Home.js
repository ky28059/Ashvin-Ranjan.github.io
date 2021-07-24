// React
import React, { Component } from "react";

// MUI
import { withStyles } from "@material-ui/core/styles";
import theme from "../utils/theme";

const styles = {
  ...theme.spreadIt,
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>A s h . v i n</h1>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
