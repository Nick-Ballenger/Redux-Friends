import React from 'react'

const Friend = props =>{
    return(
        <div>
             <h2 onClick={() => props.handleClick(props.friend.id)}>x</h2>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friends.email}</p>
           
        </div>
    )
}
export default Friend