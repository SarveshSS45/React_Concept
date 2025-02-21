import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

    const navigate = useNavigate();

    function handleClick () {
        navigate('/dashboard');
    }
  return (
    <div>
        About Page
        <button onClick={handleClick}>Move to Home page</button>
    </div>
  )
}

export default About