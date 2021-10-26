import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Join from './component/views/User/Join'
import Login from './component/views/User/Login'
import Home from './component/views/Common/Home'
import Header from './component/views/Header/Header'
import Navbar from './component/views/Navbar/Navbar'
import Footer from './component/views/Footer/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <Router>      
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/join" component = {Join}/>
          </Switch>      
      </Router>
      
      <Footer/>




    </div>

  );
}

export default App;
