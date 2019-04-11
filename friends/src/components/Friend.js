import React from 'react'

const Friend = props =>{
    return(
        <div>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friends.email}</p>
            <span onClick={() => props.clickHandle(props.friend.id)}>x</span>
        </div>
    )
}
export default Friend