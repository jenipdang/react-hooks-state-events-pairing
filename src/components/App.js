import video from "../data/video.js";
import Buttons from './Buttons.js';
import Comments from './Comments'
import { useState } from 'react'

function App() {
  // console.log("Here's your data:", video);
  const [isHide, setIsHide] = useState(false)

  // function handleHideComment() {
  //   setIsHide((isHide) => !isHide)
  // }

  // const hideClass = isHide ? "Hide Comments" : "Show Comments"

 
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
        <button onClick={() => setIsHide(!isHide)} style={{margin: "10px"}}>{isHide ? "Hide" : "Show"} Comments</button>
          {isHide ? <Comments comments={video.comments}/> : null }
    </div>
  );
}

export default App;
