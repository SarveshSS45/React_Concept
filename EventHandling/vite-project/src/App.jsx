import React from 'react'

import './App.css'

const App = () => {


  function handleClick (){
    alert("I am clicked");
  }

  function handleMouseOver() {
    alert("I am para")
  }

  function handleInputChange(e){
    console.log("I am an input field", e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    /// custom behaivour
    alert ("from submit karu ka?")
  }

  return (
    <div>


      <button onClick={alert("Button click me")}>        {/* imideat fuction invoke */}
        click me 
      </button>

      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'> Submit</button>
      </form> */}



      {/* <p onMouseOver={handleMouseOver}>
        I am para
      </p>

      <button onClick={() => {alert("I got clicked")}}>Click me </button> */}
    </div>
  )
}

export default App