import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Header/Header';

import Landingpage from './Landingpage/Landingpage';
import Loginpage from './Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path= "/" component={Landingpage} />            
        <Route exact path= "/login" component={Loginpage} />                
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
