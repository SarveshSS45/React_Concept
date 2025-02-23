import { useCallback, useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponenet from './components/ExpensiveComponenet';

function App() {

  return(
    <div>
    <ExpensiveComponenet />
  </div>
  )






  // const [count, setCount] = useState(0);

  // function handleClick(){
  //   setCount (count + 1);
  // }

  // const handleClick = useCallback (() =>{
  //   setCount(count + 1);
  // }, [count]);

  // return (
  //   <div>
  //     <div>
  //       Count: {count}
  //     </div>
  //     <br />
  //     <div>
  //       <button onClick={handleClick}>Increment</button>
  //     </div>
  //     <br />

  //     <div>
  //       <ChildComponent 
  //       buttonName="Click Me"
  //       handleClick={handleClick}
  //       />
  //     </div>
  //   </div>
  // )
}

export default App
