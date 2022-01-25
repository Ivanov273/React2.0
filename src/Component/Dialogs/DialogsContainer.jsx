import React from 'react'
import {ActionCreatorAddDialog, ActionCreatorUpdateDialogText} from "../../Readux/Reducer-Dialog";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return{
        newDialog : state.DialogPage.newDialog,
        DialogData : state.DialogPage.DialogData,
        newText : state.DialogPage.newDialog,
        TextData : state.DialogPage.TextData
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        OnChandeDialog: (text)=>{
            dispatch(ActionCreatorUpdateDialogText(text))
        },
        onaddDialogs: ()=>{
            dispatch(ActionCreatorAddDialog())
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer