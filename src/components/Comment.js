import React from 'react'

function Comment({ user, userComment}) {
    return (
        <div className="comment-list">
            <h3>{user}</h3>
            <p>{userComment}</p>
        </div>
    )
}

export default Comment