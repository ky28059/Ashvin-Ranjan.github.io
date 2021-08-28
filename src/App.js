import "./App.css";

// React
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Internals from "./pages/Internals";
import Stuff from "./pages/Stuff";
import CyrillicTextGenerator from "./pages/CyrillicTextGenerator";
import RuneTextGenerator from "./pages/RuneTextGenerator";
import SimilarTextGenerator from "./pages/SimilarTextGenerator";
import CommentSorter from "./pages/CommentSorter";
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
            <Route exact path="/internals" component={Internals} />
            <Route exact path="/stuff" component={Stuff} />
            <Route exact path="/stuff/rune" component={RuneTextGenerator} />
            <Route
              exact
              path="/stuff/cyrillic"
              component={CyrillicTextGenerator}
            />
            <Route
              exact
              path="/stuff/similar"
              component={SimilarTextGenerator}
            />
            <Route
              exact
              path="/stuff/comment_sorter"
              component={CommentSorter}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
