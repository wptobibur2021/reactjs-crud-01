import './App.css';

// Router Dom
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home/Home";
import {UserProvider} from "./components/usercontext/UserContext";
import Delete from "./components/Delete";
import Read from "./components/Read";
import Adduser from "./components/Adduser";
import Edit from "./components/Edit";
import 'react-notifications/lib/notifications.css';


function App() {
  return (
    <div className="App">
            <UserProvider>
            <Router>
                <Switch>
                    <Route path='/edit/:id'>
                        <Edit></Edit>
                    </Route>
                    <Route path='/AddUser'>
                        <Adduser></Adduser>
                    </Route>
                    <Route path='/read/:id'>
                        <Read></Read>
                    </Route>
                    <Route path='/delete/:id'>
                        <Delete></Delete>
                    </Route>
                    <Route path='/'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
            </UserProvider>
    </div>
  );
}

export default App;
