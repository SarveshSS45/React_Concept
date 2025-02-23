import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log("Child Component got re rendered again");
      return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
      )
    }
);

export default ChildComponent

// React.memo -> warp -> component -> component re render thabhi hoga jabhi props change 
// honge nahi to re render nahi hoga

//if you are sending a funtion , then react.memo wont be able to save you from re rendering 