import "./App.css";
import React from "react";
import Start from "./components/start.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
        
          <Route path={"/"} component={Start}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
