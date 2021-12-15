import { useState } from 'react'


const Buttons = ({ upvotes, downvotes }) => {
    const [upCount, setUpCount] = useState(upvotes)
    const [downCount, setDownCount] = useState(downvotes)

    function handleUpVote() {
        setUpCount((upCount) => upCount + 1)    
    }

    // function handleDownVote(){
    //     setDownCount((downCount) => downCount + 1)
    // }
    
    return (
        <div>
            <button style={{margin: "5px"}} onClick={handleUpVote}>{upCount} 👍</button>
            <button style={{margin: "5px"}} onClick={() => setDownCount(downCount + 1)}>{downCount} 👎</button>
        </div>
    )
}

export default Buttons