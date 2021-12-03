import './App.css';
import Home from './Components/Home';
import Confession from './Components/Confession';
import Misdemeanour from './Components/Misdemeanour';

function App() {
  return (
    <div className="App">
     
       <h3> Welcome to Fakelandia Justice System </h3> 
        <Home/> 
        <Misdemeanour/>
        <Confession/>
    
      <p>Welcome to the home of the Justice Department of Fakelandia.</p>
      <p>Here you can browse a list of recent misdemeanours committed by our citizens, or
        you can confess to your own misdemeanour.
      </p>
    </div>
  );
}

export default App;
