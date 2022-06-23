import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Record from './components/Record';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/records")
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [])

    useEffect(() => {
      fetch("http://localhost:3000/collection")
      .then(res => res.json())
      .then(data => setRecords(data))
   }, [])

   const addToCollection = (newRecord) => {
      setCollection(collection => [...collection, newRecord])
   }

  return (
    <Router>
      <Navigation />
      <div className = "App">
       <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/shop"><Shop records={records}/></Route>
        <Route path="/collection"><Collection collection={collection}/></Route>
        <Route path="/shop/:id/record"><Record addtoCollection={addToCollection}/></Route>
       </Switch>
      </div>
    </Router>
  )
}

export default App;
