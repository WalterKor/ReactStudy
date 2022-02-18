import './App.css';
import Hello from './component/Hello.js'
import WellCome from './component/WellCome';


function App() {
  const name = "Janny"
  const user = {
    name : "naver",
    url : "https://naver.com"

  };

  return (
    <div className="App">      
      <div>hello, {user.name}, {name}</div>
      <a href={user.url}>네이버</a>
      <Hello/>
      <WellCome/>
    </div>
  );
}

export default App;
