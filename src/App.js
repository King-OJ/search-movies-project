import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './Error'

function App() {
  return (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    
    <Route path="/movies/:id">
      <Movie />
    </Route>
    
    <Route path="*" children={<Error />}/>
      
  </Switch>
  )
}

export default App
