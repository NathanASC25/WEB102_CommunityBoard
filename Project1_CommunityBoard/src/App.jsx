import './App.css';
import Test1 from './components/Test1.jsx';
import Test2 from './components/Test2.jsx';
import Test3 from './components/Test3.jsx';

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>My name is Nathan Chin and this is my first React project.</h2>
      <Test1 instance="1st instance"/>
      <Test2 instance="1st instance"/>
      <Test3 instance="1st instance"/>
    </>
  )
}

export default App;