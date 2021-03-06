import React from 'react'
import {ActionCreatorAddDialog} from "../../Readux/Reducer-Dialog";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthContainer} from "../../HOC/AuthHOC";
import {compose} from "redux";

//let RedirectComponent = WithAuthContainer(Dialogs)


let mapStateToProps = (state) => {
    return {
        newDialog: state.DialogPage.newDialog,
        DialogData: state.DialogPage.DialogData,
        newText: state.DialogPage.newDialog,
        TextData: state.DialogPage.TextData,
        Auth: state.Auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onaddDialogs: (newDialog) => {
            dispatch(ActionCreatorAddDialog(newDialog))
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),
   // WithAuthContainer
)(Dialogs)
