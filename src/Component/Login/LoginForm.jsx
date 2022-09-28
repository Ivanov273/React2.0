import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderFieldLoginEmail, renderFieldLoginPassword} from "../FormControls/FormsControl";
import {email, maxLength15, minLength2} from "../../utils/validators";

const LoginForm=(props)=>{
    const {handleSubmit}=props
     return (
        <form onSubmit={handleSubmit} >
        <div>
            <Field placeholder='login' name='login' component={renderFieldLoginEmail} type='text' validate={email} />
        </div>
        <div>
            <Field name='password' component={renderFieldLoginPassword} type='text' validate={[maxLength15,minLength2]}/>
        </div>
        <div>
            <Field name='remember' component='input' type='checkbox' />
        </div>
            <button type="submit">Submit</button>
            <button type="submit">Delete</button>
    </form>
     )
}
let LoginFormRedux = reduxForm({
    // a unique name for the form
    form: 'loginform'
})(LoginForm)
export default LoginFormRedux