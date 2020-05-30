import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutme/Aboutme";
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
      </Switch>
    </Router>
  );
};

export default App;
