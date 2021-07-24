import "./App.css";

// React
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

// Styling
import { ThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";

const App = () => {
  return (
    <div className="main-background" style={{ backgroundColor: "#282c34" }}>
      <ThemeProvider theme={themeFile}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
