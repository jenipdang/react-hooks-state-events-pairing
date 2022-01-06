import React, { useState }from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => {
   const [searchUser, setSearchUser] = useState("")
   const [commentList, setCommentList] = useState(comments)

//    const commentsList = comments.filter((comments) => {
//        if (searchUser === "") {
//            return comments
//        } else if (comments.user.toLowerCase().includes(searchUser.toLowerCase())) {
//            return comments
//        }
//    }).map((comment) => {
//        return (
//         <Comment key={comment.id} id={comment.id} user={comment.user} userComment={comment.comment} handleDelete={handleDelete}/>
//        )})
    const commentsList = commentList
    .filter(comment => searchUser === "" || comment.user.toLowerCase().startsWith(searchUser.toLowerCase()))
    .map((comment) => <Comment key={comment.id} user={comment.user} userComment={comment.comment} id={comment.id} handleDelete={handleDelete}/>)

    function handleDelete(id) {
        const newCommentList = commentList.filter((comment) => comment.id !==id)
        setCommentList(newCommentList)
    }

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
