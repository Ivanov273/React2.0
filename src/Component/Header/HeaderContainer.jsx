import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { deleteLogin} from "../../Readux/Reducer-Auth";
class HeaderContainer extends React.Component {

    render(){
        return        <Header {...this.props} deleteLogin={this.props.deleteLogin}  />
    }
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}
export default connect (mapStateToProps,{deleteLogin})(HeaderContainer)