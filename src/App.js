import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrap from "./components/Wrap";
import Unwrap from "./components/Unwrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Undelegate from "./components/Undelegate";
import Reward from "./components/Reward";

function App() {
  return (
    <div className="bg-black">
      <Router>
      <Header />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/wrap" component={Wrap} />
          <Route path="/unwrap" component={Unwrap} />
          <Route path="/undelegate" component={Undelegate} />
          <Route path="/reward" component={Reward} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
