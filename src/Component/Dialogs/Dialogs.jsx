import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {Navigate} from 'react-router-dom';
import DialogsFormRedux from "./DialogsForm";

const Dialogs = (props) => {

    let onaddDialog = (value) => {
        props.onaddDialogs(value.formdialog)
        console.log(value.formdialog)
    }
    let DialogMass = props.DialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessagesElement = props.TextData.map(t => <MessageItem key={t.id} text={t.text}/>)
    if(!props.Auth) return <Navigate to={"/login"} />
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
                <DialogsFormRedux  onSubmit={onaddDialog} />
                </div>
            </div>
        </div>
    )
}
export default Dialogs