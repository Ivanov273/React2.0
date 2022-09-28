import React from 'react'
import LoginFormRedux, {LoginForm} from "./LoginForm";
import {AuthThunkDeleteLogin} from "../../Readux/Reducer-Auth";
const Loginpage = (props)=>{
    const onSubmit = (formdata)=>{
       props.AuthThunkLogin(formdata.login,formdata.password,formdata.remember)
    }
    const DeleteSubmit = ()=>{
       props.AuthThunkDeleteLogin()
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux AuthThunkLogin={props.AuthThunkLogin} DeleteSubmit={DeleteSubmit} onSubmit={onSubmit} />
    </div>
}

export default Loginpage