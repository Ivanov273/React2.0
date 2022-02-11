import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {SetAuth} from "../../Readux/Reducer-Auth";
import {headerAPI} from "../../api/HeaderApi";
class HeaderContainer extends React.Component {
    componentDidMount() {

       headerAPI.apiAuth().then(response => {
                     if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                this.props.SetAuth(id,login,email)
            }


        })
    }

    render(){
        return        <Header {...this.props}  />
    }
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login


    }
}
export default connect (mapStateToProps,{SetAuth})(HeaderContainer)