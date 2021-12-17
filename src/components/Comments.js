import React, { useState }from 'react'
import Comment from './Comment'

const Comments = ({ comments, onDelete }) => {
   const [searchUser, setSearchUser] = useState("")

   const commentsList = comments.filter((comments) => {
       if (searchUser === "") {
           return comments
       } else if (comments.user.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase())) {
           return comments
       }
   }).map((comment) => {
       return (
        <Comment key={comment.id} id={comment.id} user={comment.user} userComment={comment.comment} onDelete={onDelete}/>
       )})

    const totalComments = comments.length


    return (
        <div>
            <h1>{totalComments} Comments</h1>
            <input type="text" placeholder="Search username..." onChange={(e) => {setSearchUser(e.target.value)}} value={searchUser}/>
            <div id="comments">{commentsList}</div>
        </div>
    )
}


// - Add a search bar to search comments by username
// - Add a sorting feature to sort the comments

export default Comments
