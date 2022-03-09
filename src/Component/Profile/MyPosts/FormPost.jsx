import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxleight, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

let maxLength15 = maxleight(15)
const LogiFormPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={'post'} component={Textarea}  placeholder='Enter your message' validate={[required,maxLength15]}
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