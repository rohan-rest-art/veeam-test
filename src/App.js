import React from 'react'
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './components/Navigation'
import FormConstructor from './components/FormConstructor'

const App = () => (
  <Router>
    <div className={styles.root}>
      <Nav />
      <Route exact path='/' render={() => (<Redirect from='/' to='/config' />)} /> {/* TODO: fix */}
      <FormConstructor />
    </div>
  </Router>
)

export default App
