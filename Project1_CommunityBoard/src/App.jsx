import './App.css';
import Caps from './components/Caps.jsx';
import SmallerCaps from './components/SmallerCaps.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <Caps instance="War Thunder"/>
      <SmallerCaps className="smallerCaps" instance="Ammunition Types"/>
      <div>
        <h1 className="smallerCaps">Hello!</h1>
      </div>
    </>
  )
}

export default App;