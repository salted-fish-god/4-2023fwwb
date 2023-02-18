import React from "react"

interface MessageProps{}
interface MessageState{}

function Message(props: MessageProps, state: MessageState){
    return(
        <div className="Message">
            <h1>Message</h1>
        </div>
    )
}

export default Message