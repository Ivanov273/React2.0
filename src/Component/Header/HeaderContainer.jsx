import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthThunk, AuthThunkDeleteLogin} from "../../Readux/Reducer-Auth";

class HeaderContainer extends React.Component {
    componentDidMount() {


        this.props.AuthThunk()

        }


    render(){
        return        <Header {...this.props} AuthThunkDeleteLogin={this.props.AuthThunkDeleteLogin} />
    }
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login


    }
}
export default connect (mapStateToProps,{AuthThunk,AuthThunkDeleteLogin})(HeaderContainer)