import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {SetAuth} from "../../Readux/Reducer-Auth";
import axios from "axios";
class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {

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