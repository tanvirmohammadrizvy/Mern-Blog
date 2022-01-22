import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "../src/Components/TopBar/TopBar";
import Home from "../src/Pages/home/Home"
import Register from "../src/Pages/register/Register"
import Login from "../src/Pages/login/Login"
import Settings from "../src/Pages/settings/Settings"
import Single from "../src/Pages/single/Single"
import Write from "../src/Components/Write/Write"
import Contact from "./Pages/contact/Contact";
import About from "./Pages/about/About";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Home/> : <Login />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register />}
        </Route>
        <Route path="/Post/:postId">
          <Single />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
