import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Footer from './layout/Footer';
import Header from './layout/Header';
import Landingpage from './Landingpage/Landingpage';
import Loginpage from './Loginpage/Loginpage';
import Joinpage from './JoinPage/Joinpage'
import Auth from '../../hoc/auth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path= "/" component={Auth(Landingpage, null, true)} />            
        <Route exact path= "/login" component={Auth(Loginpage, false)} />                
        <Route exact path= "/join" component={Auth(Joinpage, false)} />                
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
