import React from 'react'

const Card = (props) => {
  return (
    <div>

        <input type='text'onChange={(e) => props.setName(e.target.value)}/>
        <p>Name State variable ki value inside the {props.title} : {props.name}</p>
    </div>
  )
}

export default Card