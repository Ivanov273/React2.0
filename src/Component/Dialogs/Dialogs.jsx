import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
    let ChandeDialog = (e) => {
        let text = e.target.value
        props.OnChandeDialog(text)
    }
    let AddDialog = () => {
        props.onaddDialogs()
    }
    let DialogMass = props.DialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessagesElement = props.TextData.map(t => <MessageItem key={t.id} text={t.text}/>)
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialog_items}>

                    {DialogMass}

                </div>
            </div>
            <div className={s.messages}>
                {MessagesElement}
                <div>
                    <textarea value={props.newDialog} placeholder='Enter your message' onChange={ChandeDialog} cols="20"
                              rows="1"></textarea>
                    <button onClick={AddDialog}>add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs