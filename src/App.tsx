import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/home/Home";
import About from "./container/aboutme/Aboutme";
import Component from "./container/component/Component";
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutme" exact>
          <About />
        </Route>
        <Route path="/component" exact>
          <Component />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
