import React from "react";
import Todo from "./Todo";
import Active from "./Active";
import Taken from "./Taken";
import "./App.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const Root=()=>{
  return(
    <>
    <div style={{width:100+"vw",height:80,backgroundColor:"lightblue"}}>
      <h3 style={{marginLeft:"40%", bottom:"3px"}}>ADVANCE TODO LIST</h3>
    </div>
    <Router>
        <Switch>
          <Route path="/" exact component={Todo}/>
          <Route path="/activecount" exact component={Active}/>
          <Route path="/takencount" exact component={Taken}/>
        </Switch>
    </Router>
    </>
  )
}

export default Root;