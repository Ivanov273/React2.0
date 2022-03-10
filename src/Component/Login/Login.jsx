import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunk} from "../../Readux/Reducer-Auth";
import {Input} from "../Common/FormControls/FormControls";
import {maxleight, required} from "../../utils/validators/validators";
import {Navigate} from 'react-router-dom';
const maxleight20 = maxleight(30)
const LogiForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={'email'} component={Input} validate={[required, maxleight20]}
                       placeholder='login'/>
            </div>
            <div>
                <Field type={"password"} name={'password'}  component={Input} validate={[required, maxleight20]}
                       placeholder='passowrd'/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}
const LoginFormRedux = reduxForm({
    form: 'login', // имя формы в state (state.form.login)
})(LogiForm)

const Loginpage = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
       return  <Navigate to={"/profile"}/>
                         }
    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit} />
    </div>
}
let mapStateToLogin = (state) => {
    return {
        isAuth: state.Auth.isAuth,
    }
}

export default connect(mapStateToLogin, {LoginThunk})(Loginpage)