import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
        <h3>props : properties</h3>
        <Hello age={10}/>
        <Hello age={20}/>
        <Hello age={30}/>        
    </div>
  );
}

export default App;
