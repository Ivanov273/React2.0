import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
    let DialogMass = props.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let MessagesElement = props.TextData.map(text_mas => <MessageItem text={text_mas.text}/>)
//console.log(DialogMass)
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialog_items}>

                    {DialogMass}

                </div>
            </div>
            <div className={s.messages}>
                {MessagesElement}

            </div>
        </div>
    )
}
export default Dialogs