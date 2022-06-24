import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Record from './components/Record';
import RecordCollected from './components/RecordCollected';
import Navigation from './components/Navigation';

const App = () => {
  const [login, setLogin] = useState(false);
  const [records, setRecords] = useState([]);
  const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/records")
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [])

   const handleLogin = () => {
    login === false ? setLogin(true) : setLogin(false);
   }

   const addToCollection = (newRecord) => {
      setCollection(collection => [...collection, newRecord])
   }

  return (
    <div className = "App">
      <Navigation handleLogin={handleLogin} login={login}/>
       <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/shop"><Shop records={records}/></Route>
        <Route exact path="/collection"><Collection collection={collection} setCollection={setCollection} login={login}/></Route>
        <Route exact path="/shop/:id"><Record addtoCollection={addToCollection} login={login}/></Route>
        <Route exact path="/collection/:id"><RecordCollected /></Route>
       </Switch>
    </div>
  )
}

export default App;