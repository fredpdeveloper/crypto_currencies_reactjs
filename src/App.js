import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import TickerState from './context/ticker/TickerState'

const  { REACT_APP_BASEPATH:basePath } = process.env

const App = () => {
  return (
    <TickerState>
    <div className='app'>
      <Router basename={basePath || '/crypto'}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      </div>
    </TickerState>
  ); 
}

export default App;
