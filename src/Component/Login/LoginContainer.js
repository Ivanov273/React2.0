import React from "react";
import Loginpage from "./Login";
import {connect} from "react-redux";
import {AuthThunkDeleteLogin, AuthThunkLogin} from "../../Readux/Reducer-Auth";

class LoginContainer extends React.Component{
    render() {

        return <Loginpage  AuthThunkLogin={this.props.AuthThunkLogin} />
    }
}
let mapStateToProps=(state)=>{
    return {
        login: state.Auth.login
    }
}
export default connect(mapStateToProps, {AuthThunkLogin,AuthThunkDeleteLogin})
(LoginContainer)