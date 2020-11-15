import React, { useEffect, useRef, useState } from "react";

import {connect} from "react-redux";
import {userMessage, sendMessage} from "../../actions/watson";
import {toggleChat} from "../../actions/app";

import Message from "./Message";

function Chat({chat, userMessage, sendMessage, toggleChat}) {

    const dummy = useRef(null);

    const [message, setMessage] = useState(""); 
    async function handleSubmit(event) {
        const code = event.keyCode || event.which;
        if (code === 13 && message !== "") {
            userMessage(message);
            sendMessage(message);
            setMessage("");
            
        }
    }

    function scrollToBottom() {
        dummy.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [chat]);
    
    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-text">
                    Assistant
                    &#x1f916;
                </div>
                <button 
                    className="chat-header-close"
                    onClick={() => toggleChat()}
                >
                    X
                </button>
            </div>
            
            <div className="chat-body">
                {
                    chat.length === 0 ? 
                    "" : 
                    chat.map((message, idx) => 
                        <Message 
                            type={message.type} 
                            message={message.message} 
                        />
                    ) 
                }
                <div ref={dummy}></div>
            </div>

            <div className="chat-input">
                <input 
                    className="chat-input-box"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    onKeyPress={event => handleSubmit(event)}
                    placeholder=" Ask Something..."
                ></input>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    chat: state.watson.messages
})

export default connect(mapStateToProps, {userMessage, sendMessage, toggleChat})(Chat);