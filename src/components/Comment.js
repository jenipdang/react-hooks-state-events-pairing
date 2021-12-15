import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function Comment({ id, user, userComment, onDelete }) {

    // - Add upvote/downvote buttons to each comment
    const [likeComment, setLikeComment] = useState(0)
    const [dislikeComment, setDislikeComment] = useState(0)
    
    function handleLikeComment() {
        setLikeComment((likeComment) => likeComment + 1)    
    }
    function handleDislikeComment() {
        setDislikeComment((dislikeComment) => dislikeComment + 1)    
    }
    
    
    return (
        <div className="comment-list">
            <h3>
                {user} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)} />
            </h3>
            <p>{userComment}</p>
            <button style={{margin: "5px"}} onClick={handleLikeComment}>{likeComment} 👍</button>
            <button style={{margin: "5px"}} onClick={handleDislikeComment}>{dislikeComment} 👎</button>
            {/* <button style={{padding: "4px"}}>Remove Comment</button> */}
        </div>
    )
}



export default Comment