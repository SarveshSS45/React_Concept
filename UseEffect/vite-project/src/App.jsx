
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0);

  const [total, SetTotal] = useState(1);



  // useEffect(() =>{

  //   first 

  //   return() => {
  //     second 
  //   }
  // }, [third]) 

  // variation :1
  //runs on every render

  // useEffect(() =>{
  //   alert("I will run every time ");
  // })


  //varation : 2
  // that only runs on the first render
  // useEffect(() =>{
  //   alert("i will run on only 1st render");
  // }, [])


  //varation :3

  // useEffect(() =>{
  //   alert("I will run every time when count is updated");
  // }, [count])


  //varation :4
  // multiple dependices

  // useEffect(() => {

  //   alert("T will render every time when the count/total page will render")
    
  // }, [count,total])
  

  //varation :5
  ///clean up function

  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("Count is unmounted from ui")
    }
  }, [count])
  

  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    SetTotal(total+1);
  }


  return (
    <div>
      <button onClick={handleClick}>
        Update Count  
      </button>
      <br/>
      Count is : {count}
      <br />

      <button onClick={handleClickTotal}>
        Update Total  
      </button>
      <br/>
      Count is : {total}
    </div>
  )
}

export default App
