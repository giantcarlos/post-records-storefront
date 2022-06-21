import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className = "App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/collection" component={Coollection} />
        <Route exact path="/about" component={About} />
        <Route path="/ship/:id" component={Record} />
       </Switch>
      </div>
    </Router>
    
  )
}

export default App;
