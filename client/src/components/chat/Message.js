
function Message(props) {
    return (
        <div className={"message-row-" + props.type}>
            <div className={"message-" + props.type}>
                <p className="text">{props.message}</p>
            </div>
        </div>
    )
}

export default Message;