import React, { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';



const App = () => {

  const[isLoggedIn, SetLoggedIn] = useState(false);



  if(!isLoggedIn){
    return(
      <LoginBtn />
    )
  }


    return(

    <div>

      <h1> WElcome to reactJS</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )



  /// logical opertor

  // return(

  //   <div>

  //     <h1> WElcome to reactJS</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )




  /// ternary opertor


  // return(
  //   <div>
  //   {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )




  ///        if else

  // if(isLoggedIn){

  //   return(
  //     <LogoutBtn />
  //   )

  // }
  // else{
  //   return(
  //     <LoginBtn />
  //   )
  // }
  
}

export default App