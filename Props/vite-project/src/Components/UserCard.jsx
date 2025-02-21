import React from 'react'
import sarimg from '../assets/sarvesh.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>

        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={sarimg} alt='love'></img>
        <p id='user-desc'>{props.desc}</p>

    </div>
  )
}

export default UserCard