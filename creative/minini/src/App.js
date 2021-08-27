import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/Home'
import React from 'react'
import Service from './component/pages/Service'


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
         <Route path='/'exact component = {Home}/>
         <Route path='/servies' component = {Service}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
