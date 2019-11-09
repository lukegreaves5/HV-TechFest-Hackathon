import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PythonField from "./pythonfield";
import FullStackField from "./fullstackfield";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/paths/python" component={PythonField} />
        <Route path="/paths/fullstack" component={FullStackField} />
      </Switch>
    </Router>
  );
};

export default Routes;
