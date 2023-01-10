import React from "react";
import Loginpage from "./Login";
import {connect} from "react-redux";
import {AuthThunkCaptcha, AuthThunkDeleteLogin, AuthThunkLogin} from "../../Redux/Reducer-Auth";

class LoginContainer extends React.Component{
    render() {
        return <Loginpage dataurl={this.props.dataurl} isAuth={this.props.isAuth} AuthThunkCaptcha={this.props.AuthThunkCaptcha} AuthThunkLogin={this.props.AuthThunkLogin} />
    }
}
let mapStateToProps=(state)=>{
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth,
        dataurl: state.Auth.dataurl
    }
}
export default connect(mapStateToProps, {AuthThunkLogin,AuthThunkDeleteLogin,AuthThunkCaptcha})
(LoginContainer)