import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './component/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>          
          <Route exact path="/" component={DayList}/>
          <Route exact path="/day/:day" component={Day}/>         
          <Route exact path="" component={ErrorPage}/>          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
