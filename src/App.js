import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Record from './components/Record';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className = "App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/collection" component={Collection} />
        <Route path="/ship/:id" component={Record} />
       </Switch>
      </div>
    </Router>
    
  )
}

export default App;
