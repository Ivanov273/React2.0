import React from 'react'
import {ActionCreatorAddDialog, ActionCreatorUpdateDialogText} from "../../Readux/Reducer-Dialog";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let OnChandeDialog = (text) => {
                    store.dispatch(ActionCreatorUpdateDialogText(text))
                }
                let onAddDialog = () => {
                    store.dispatch(ActionCreatorAddDialog())
                }
                return <Dialogs OnChandeDialog={OnChandeDialog}
                                onaddDialogs={onAddDialog}
                                newDialog={state.DialogPage.newDialog}
                                DialogData={state.DialogPage.DialogData}
                                newText={state.DialogPage.newDialog}
                                TextData={state.DialogPage.TextData}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer