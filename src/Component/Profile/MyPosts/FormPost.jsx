import React from 'react';
import {Field, reduxForm} from "redux-form";


const LogiFormPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'post'} component="textarea"  placeholder='Enter your message'
                   />
            </div>


            <div>
                <button  >добавить</button>
                <button>удалить</button>
            </div>

        </form>
    )
}
const LoginPostFormRedux = reduxForm({
    form: 'formpost' // имя формы в state (state.form.login)
})(LogiFormPost)
export default LoginPostFormRedux;