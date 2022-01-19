import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {ActionCreatorAddDialog, ActionCreatorUpdateDialogText} from "../../Readux/State";

const Dialogs = (props) => {
    let elementDialog = React.createRef()
    let OnChandeDialog = () => {
        let text = elementDialog.current.value
        props.dispatch(ActionCreatorUpdateDialogText(text))
    }
    let AddDialog = () => {
        props.dispatch(ActionCreatorAddDialog())
    }
    let DialogMass = props.DialogPage.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let MessagesElement = props.DialogPage.TextData.map(text_mas => <MessageItem text={text_mas.text}/>)
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
                    <textarea ref={elementDialog} value={props.DialogPage.newDialog} onChange={OnChandeDialog} cols="20"
                              rows="1"></textarea>
                    <button onClick={AddDialog}>add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs