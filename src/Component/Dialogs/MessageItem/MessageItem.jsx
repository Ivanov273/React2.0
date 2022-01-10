import React from 'react'
import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.message_item}>{props.text}</div>
    )
}

export default MessageItem