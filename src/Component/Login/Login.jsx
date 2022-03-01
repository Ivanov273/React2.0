import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunk} from "../../Readux/Reducer-Auth";


const LogiForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field type="text" name={'login'} component="input" placeholder='login'/>
            </div>
            <div>
                <Field type="text" name={'password'} component="input" placeholder='passowrd'/>
            </div>
            <div>
                <Field type="checkbox" name={'remember me'} component="input" /> remember me
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
    const onSubmit=(formData)=>{
       // console.log(formData)
        console.log(props)
        props.setlogin(formData.login,formData.password,formData.rememberMe)
    }
   //console.log(props)
    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux onSubmit={onSubmit} setlogin={props.LoginThunk} />
    </div>
}
let mapStateToLogin = (state) => {
    return {
        login: state.Auth.login2,
    }
}

export default connect(mapStateToLogin,{LoginThunk})(Loginpage)