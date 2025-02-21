import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate();


    function handleClick (){
        navigate('/about');

    }

  return (
    <div>Home
        <button onClick={handleClick}>Move to About Page</button>
    </div>
  )
}

export default Home