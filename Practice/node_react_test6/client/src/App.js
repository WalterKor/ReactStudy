import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './component/views/common/header'
import Footer from './component/views/common/footer'
import Home from './component/views/common/Home'
import Join from './component/views/user/Join'
import Login from './component/views/user/Login'


function App() {
  return (
    <div>
        <Header/>

          <Router>            
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/login" component = {Login}/>
              <Route exact path = "/join" component = {Join}/>            
          </Router>

        <Footer/>
    </div>
  );
}

export default App;
