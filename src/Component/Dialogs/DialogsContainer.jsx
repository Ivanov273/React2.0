import React from 'react'
import {ActionCreatorAddDialog, ActionCreatorUpdateDialogText} from "../../Readux/Reducer-Dialog";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    let OnChandeDialog = (text) => {
        props.store.dispatch(ActionCreatorUpdateDialogText(text))
    }
    let onAddDialog = () => {
        props.store.dispatch(ActionCreatorAddDialog())
    }
    return (
        <Dialogs OnChandeDialog={OnChandeDialog}
                 onaddDialogs={onAddDialog}
                 newDialog={state.DialogPage.newDialog}
                 DialogData={state.DialogPage.DialogData}
                 newText={state.DialogPage.newDialog}
                 TextData={state.DialogPage.TextData}/>
    )
}
export default DialogsContainer