
import './App.css';
import Counter from './Components/Counter';
// import Function from './Function';
// import Statecounter from './Statecounter';
// import StateExample from './StateExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterTheme from './Components/CounterTheme';


function App() {
  return (
    <div className="App">
   {/* <Function/> */}
   {/* <StateExample/>
   <Statecounter/> */}
   <Counter/>
   <CounterTheme/>
    </div>
  );
}

export default App;
