import video from "../data/video.js";
import Buttons from './Buttons.js';
import Comments from './Comments'
import { useState } from 'react'


function App() {
  // console.log("Here's your data:", video);
  const [isHide, setIsHide] = useState(true)
  const [newComments, setNewComments] = useState("")
  // const [comments, setComments] = useState([])

  // function handleHideComment() {
  //   setIsHide((isHide) => !isHide)
  // }

  // const hideClass = isHide ? "Hide Comments" : "Show Comments"

  // Add a "Remove Comment" button to delete comments from the pageAdd a "Remove Comment" button to delete comments from the page
  

  const deleteComment = (id) => {
    const updatedComment = newComments.filter(comment => comment.id !== id)
    setNewComments(updatedComment)
  }
 
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <Buttons upvotes={video.upvotes} downvotes={video.downvotes}/>
        {/* Show Hide Button */}
        <button onClick={() => setIsHide(!isHide)} style={{margin: "10px", padding: "5px"}}>{isHide ? "Hide" : "Show"} Comments</button>
          {isHide ? <Comments comments={video.comments} newComments={newComments} onDelete={deleteComment}/> : null }
    </div>
  );
}

export default App;
