import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/Services';
import Product from './components/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
