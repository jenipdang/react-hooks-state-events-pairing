import React, { useState }from 'react'
import Comment from './Comment'



const Comments = ({comments, onDelete }) => {
  

   const commentsList = comments.map((comment) => (
        <Comment key={comment.id} id={comment.id} user={comment.user} userComment={comment.comment} onDelete={onDelete}/>
    ))

    const totalComments = comments.length

    // const commentsToDisplay = comments
    // .filter((comment) => comment.user.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h1>{totalComments} Comments</h1>
           <div id="comments">{commentsList}</div>
        </div>
    )
}


// - Add a search bar to search comments by username
// - Add a sorting feature to sort the comments

export default Comments
